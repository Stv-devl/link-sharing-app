import React, { useCallback, useState } from 'react';
import useUserStore from '@/store/useUsersStore';
import { linkValidationSchema } from '@/utils/validationShema';
import { generateId } from '@/utils/generateId';
import * as Yup from 'yup';
import { FieldErrors, LinkDetail, LinkErrors, UrlValue } from '@/types/types';

const useAddLink = () => {
  const { link, addLink, removeLink, updateLink } = useUserStore();

  const [linkErrors, setLinkErrors] = useState<LinkErrors>({});

  const handleAddLink = () => {
    addLink({
      key: generateId(),
      label: '',
      url: '',
      color: '',
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
      if (!currentLink) return;
      if (field === 'label') {
        updateLink(
          key,
          (value as LinkDetail).key,
          (value as LinkDetail).label,
          (value as LinkDetail).url,
          (value as LinkDetail).color
        );
      } else if (field === 'url') {
        const urlValue =
          typeof value === 'string' ? value : (value as UrlValue).url;
        updateLink(key, key, currentLink.label, urlValue, currentLink.color);
      }
    },
    [link, updateLink, updateLinkErrors]
  );

  /**
   * Handles form submission for logging in the user.
   * @param e - The form submission event.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await linkValidationSchema.validate(
        { links: link },
        { abortEarly: false }
      );
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
  };

  return {
    link,
    removeLink,
    linkErrors,
    handleAddLink,
    handleChange,
    handleSubmit,
  };
};
export default useAddLink;
