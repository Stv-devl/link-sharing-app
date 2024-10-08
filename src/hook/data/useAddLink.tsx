'use client ';

import React, { useCallback, useState } from 'react';
import useUserStore from '@/store/useUsersStore';
import { linkValidationSchema } from '@/utils/validationShema';
import { generateId } from '@/utils/generateId';
import * as Yup from 'yup';
import { FieldErrors, LinkDetail, LinkErrors, UrlValue } from '@/types/types';
import { UseAddLinkReturn } from '../../types/types';
import useModalStore from '@/store/useModalStore';

/**
 * Custom hook for managing user links.
 * Handles adding, updating, removing links, and form submission.
 * @returns {object} An object containing:
 * - `link`: Array of current user links.
 * - `removeLink`: Function to remove a link.
 * - `removeLinkBack`: Function to remove a link from the backend.
 * - `linkErrors`: Validation errors for links.
 * - `handleAddLink`: Function to add a new link.
 * - `handleChange`: Function to handle changes in link fields.
 * - `handleSubmit`: Function to submit the links form.
 */

const useAddLink = (): UseAddLinkReturn => {
  const {
    link,
    addLink,
    removeLink,
    removeLinkBack,
    updateLinkLocal,
    updateLinkBack,
  } = useUserStore();

  const [linkErrors, setLinkErrors] = useState<LinkErrors>({});
  const [initialLinks, setInitialLinks] = useState<LinkDetail[] | null>(null);

  React.useEffect(() => {
    if (link && !initialLinks) {
      setInitialLinks(JSON.parse(JSON.stringify(link)));
    }
  }, [link, initialLinks]);

  const handleAddLink = () => {
    addLink({
      key: generateId(),
      label: '',
      url: '',
      color: '',
      isLocal: true,
    });
  };

  const updateLinkErrors = useCallback((index: number, field: string) => {
    setLinkErrors((prevErrors) => ({
      ...prevErrors,
      [index]: {
        ...prevErrors[index],
        [field]: '',
      },
    }));
  }, []);

  const handleChange = useCallback(
    (
      index: number,
      key: string,
      field: string,
      value: LinkDetail | UrlValue
    ) => {
      updateLinkErrors(index, field);
      const currentLink = link && link.find((link) => link.key === key);
      const isLocal = true;
      if (!currentLink) return;
      if (field === 'label') {
        const updatedLinks = {
          key: (value as LinkDetail).key,
          label: (value as LinkDetail).label,
          url: (value as LinkDetail).url,
          color: (value as LinkDetail).color,
          isLocal: isLocal,
        };
        updateLinkLocal(key, updatedLinks);
      } else if (field === 'url') {
        const urlValue =
          typeof value === 'string' ? value : (value as UrlValue).url;

        const updatedLinks = {
          key: key,
          label: currentLink.label,
          url: urlValue,
          color: currentLink.color,
          isLocal: isLocal,
        };
        updateLinkLocal(key, updatedLinks);
      }
    },
    [link, updateLinkLocal, updateLinkErrors]
  );

  const hasChanges = () => {
    if (!initialLinks || !link) return false;
    return link.some((currentLink, index) => {
      const initialLink = initialLinks[index];
      if (
        currentLink.label !== initialLink?.label ||
        currentLink.url !== initialLink?.url ||
        currentLink.color !== initialLink?.color
      ) {
        return true;
      }
      return false;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hasChanges()) {
      useModalStore.getState().openModal('error');
      return;
    }

    if (link !== null) {
      try {
        await linkValidationSchema.validate(
          { links: link },
          { abortEarly: false }
        );
        updateLinkBack(link);
        setInitialLinks(link);
        console.log('Links are valid:', link);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const fieldErrors: FieldErrors = {};
          error.inner.forEach((err) => {
            if (err.path) {
              const match = err.path.match(/links\[(\d+)\]\.(\w+)/);
              if (match) {
                const [_, index, field] = match;
                const indexNumber = parseInt(index, 10);
                if (!fieldErrors[indexNumber]) {
                  fieldErrors[indexNumber] = {};
                }
                fieldErrors[indexNumber][field] = err.message;
              }
            }
          });
          console.log('Field errors:', fieldErrors);
          setLinkErrors(fieldErrors);
        }
        console.error('Validation error:', error);
      }
    } else {
      console.log('Link is null');
    }
  };

  return {
    link,
    removeLink,
    removeLinkBack,
    linkErrors,
    handleAddLink,
    handleChange,
    handleSubmit,
  };
};
export default useAddLink;
