import React from 'react';
import Dropdown from '@/componant/form/dropdown/Dropdown';
import Input from '@/componant/form/input/Input';
import { formatText } from '@/utils/formatText';
import { CreateLinkProps, LinkDetail, UrlValue } from '@/types/types';

const CreateLink: React.FC<CreateLinkProps> = ({
  link,
  number,
  removeLink,
  handleChange,
  linkErrors,
}) => {
  const handleDropdownChange = (selectedOption: LinkDetail) => {
    handleChange(number, link.key, 'label', selectedOption);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: UrlValue = { url: event.target.value };
    handleChange(number, link.key, 'url', value);
  };

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
        <p className={'cursor-pointer'} onClick={() => removeLink(link.key)}>
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
