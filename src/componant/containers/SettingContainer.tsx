import React from 'react';
import Button from '../button/Button';
import CreateLink from '../links/setting/CreateLink';
import useAddLink from '@/hook/data/useAddLink';
import EmptySetting from '../links/setting/EmptySetting';

/**
 * SettingContainer component renders the link settings form and handles form submission.
 * It includes the CreateLink component for each link and the EmptySetting component when there are no links.
 * @returns {JSX.Element} The rendered SettingContainer component, which may include a loading indicator or error message.
 */

const SettingContainer = (): JSX.Element => {
  const {
    link,
    removeLink,
    removeLinkBack,
    linkErrors,
    handleAddLink,
    handleChange,
    handleSubmit,
  } = useAddLink();

  const containerClass = link && link.length > 2 ? 'overflow-y-auto ' : '';

  return (
    <div className="w-full h-full p-7 sm:p-10">
      <h1 className="text-titleSmall sm:text-title text-black mb-4">
        Customize your links
      </h1>
      <p className="mb-6">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="mb-6">
        <Button label={'+ Add new link'} onClick={handleAddLink} />
      </div>
      <form
        className={'flex flex-col gap-3'}
        action="submit"
        onSubmit={handleSubmit}
      >
        <div className={`${containerClass} flex flex-col gap-6 h-[470px] `}>
          {link && link.length > 0 ? (
            link.map((link, index) => (
              <CreateLink
                key={`${link.key}`}
                link={link}
                number={index}
                removeLink={removeLink}
                removeLinkBack={removeLinkBack}
                handleChange={handleChange}
                linkErrors={linkErrors}
              />
            ))
          ) : (
            <EmptySetting />
          )}
        </div>
        <div className="flex justify-end w-full border-t mt-6 ">
          <div className="w-full sm:w-[91px] mt-6 ">
            <Button label={'Save'} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingContainer;
