import React from 'react';
import ProfilePictureWrapper from '../profil/ProfilePictureWrapper';
import ProfileDetailsWrapper from '../profil/ProfileDetailsWrapper';
import Button from '../button/Button';
import useUpdateProfile from '@/hook/data/useUpdateProfile';

const ProfilContainer = () => {
  const { profile, profilErrors, handleChange, handleSubmit } =
    useUpdateProfile();

  return (
    <div className="w-full h-full p-7 sm:p-10">
      <h1 className="text-titleSmall sm:text-title text-black mb-4">
        Profile Details
      </h1>
      <p className="mb-10">
        Add your details to create a personal touch to your profile.
      </p>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="mb-6">
          <ProfilePictureWrapper />
        </div>
        <div className="mb-6">
          <ProfileDetailsWrapper
            profile={profile}
            handleChange={handleChange}
            profilErrors={profilErrors}
          />
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

export default ProfilContainer;
