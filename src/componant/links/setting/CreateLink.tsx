import React, { useCallback } from 'react';
import Dropdown from '@/componant/form/dropdown/Dropdown';
import Input from '@/componant/form/input/Input';
import { formatText } from '@/utils/formatText';
import { CreateLinkProps, LinkDetail, UrlValue } from '@/types/types';

/**
 * CreateLink renders a form section for creating or editing a link.
 * It includes a dropdown for selecting the platform, an input for entering the URL,
 * and a remove button to delete the link. The component handles input changes,
 * manages link removal, and displays validation errors if present.
 * @param {CreateLinkProps} props - Properties for the CreateLink component.
 * @param {LinkDetail} props.link - The link data containing label, url, key, and isLocal.
 * @param {number} props.number - The index number of the link.
 * @param {(linkKey: string) => void} props.removeLink - Function to remove a local link.
 * @param {(linkKey: string) => void} props.removeLinkBack - Function to remove a link from backend.
 * @param {(number: number, key: string, field: string, value: any) => void} props.handleChange - Function to handle changes in dropdown or input.
 * @param {Record<number, { url?: string; label?: string }>} props.linkErrors - Object containing validation errors for each link.
 * @returns {JSX.Element} The rendered CreateLink component.
 */

const CreateLink: React.FC<CreateLinkProps> = ({
  link,
  number,
  removeLink,
  removeLinkBack,
  handleChange,
  linkErrors,
}: CreateLinkProps): JSX.Element => {
  const handleDropdownChange = (selectedOption: LinkDetail) => {
    handleChange(number, link.key, 'label', selectedOption);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: UrlValue = { url: event.target.value };
    handleChange(number, link.key, 'url', value);
  };

  const handleDelete = useCallback(
    (linkKey: string, isLocal: boolean) => {
      if (!isLocal) {
        removeLinkBack(linkKey);
      } else {
        removeLink(linkKey);
      }
    },
    [removeLink, removeLinkBack]
  );

  const errorsForCurrentLink = linkErrors[number] || {};
  const urlError = errorsForCurrentLink.url || '';
  const labelError = errorsForCurrentLink.label || '';

  return (
    <div className="bg-background-white w-full p-5 rounded-lg ">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2 items-center">
          <div className="flex justify-start h-2">
            <div className="border-b border-t w-3 h-1.5 border-dark-gray"></div>
          </div>
          <p>{`Link #${number + 1}`}</p>
        </div>
        <p
          className={'cursor-pointer'}
          onClick={() => handleDelete(link.key, !link.isLocal)}
        >
          Remove
        </p>
      </div>

      <Dropdown
        labelText={'Plateform'}
        value={link.label}
        name={`"Select${formatText(link.label)}`}
        handleOption={handleDropdownChange}
        error={labelError}
      />
      <div className="mt-4">
        <Input
          name={formatText(link.label)}
          label={'Link'}
          placeholder={`e.g. ${link.url}`}
          type="text"
          handleChange={handleInputChange}
          value={link.url}
          error={urlError}
          iconSrc={'/images/icon-link.svg'}
        />
      </div>
    </div>
  );
};

export default CreateLink;
