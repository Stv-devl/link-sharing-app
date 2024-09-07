import React from 'react';
import Button from '../button/Button';
import CreateLink from '../links/setting/CreateLink';
import useAddLink from '@/hook/data/useAddLink';
import EmptySetting from '../links/setting/EmptySetting';

const SettingContainer = () => {
  const {
    link,
    removeLink,
    linkErrors,
    handleAddLink,
    handleChange,
    handleSubmit,
  } = useAddLink();

  const containerClass =
    link && link.length > 2
      ? ' no-scrollbar h-[350px] sm:h-[550px] overflow-y-auto '
      : 'h-auto';

  return (
    <div className="w-full h-full p-7 sm:p-10">
      <h1 className="text-titleSmall sm:text-title text-black mb-4">
        Customize your links
      </h1>
      <p className="mb-10">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="mb-6">
        <Button label={'+ Add new link'} onClick={handleAddLink} />
      </div>
      <form
        className={'flex flex-col gap-6'}
        action="submit"
        onSubmit={handleSubmit}
      >
        <div className={`${containerClass} flex flex-col gap-6`}>
          {link && link.length > 0 ? (
            link.map((link, index) => (
              <CreateLink
                key={`${link.key}`}
                link={link}
                number={index}
                removeLink={removeLink}
                handleChange={handleChange}
                linkErrors={linkErrors}
              />
            ))
          ) : (
            <EmptySetting />
          )}
        </div>
        <div className="flex justify-end w-full border-t ">
          <div className="w-full sm:w-[91px] mt-6">
            <Button label={'Save'} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingContainer;
