'use client';
import React from 'react';
import ProfilePictureWrapper from '../profile/ProfilePictureWrapper';
import ProfileDetailsWrapper from '../profile/ProfileDetailsWrapper';
import Button from '../button/Button';
import useUpdateProfile from '@/hook/data/useUpdateProfile';

/**
 * ProfilContainer component renders the profile details form and handles form submission.
 * It includes the ProfilePictureWrapper and ProfileDetailsWrapper components.
 * @returns {JSX.Element} The rendered ProfilContainer component, which may include a loading indicator or error message.
 */

const ProfilContainer = () => {
  const { profile, profilErrors, setFile, handleChange, handleSubmit } =
    useUpdateProfile();

  return (
    <div className="flex flex-col space-between w-full h-full p-7 sm:p-10">
      <h1 className="text-titleSmall sm:text-title text-black mb-4">
        Profile Details
      </h1>
      <p className="mb-10">
        Add your details to create a personal touch to your profile.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <ProfilePictureWrapper setFile={setFile} />
        </div>
        <div className="mb-6 sm:mb-[100px]">
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
