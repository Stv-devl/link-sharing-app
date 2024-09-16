import React, { useCallback, useState } from 'react';
import useUserStore from '@/store/useUsersStore';
import * as Yup from 'yup';
import { profileValidationSchema } from '@/utils/validationShema';
import { ProfileErrors } from '@/types/types';

/**
 * Custom hook for updating user profile.
 * Manages profile state, handles input changes, and submits profile data.
 * @returns {object} An object containing:
 * - `profile`: The current user profile data.
 * - `profilErrors`: Validation errors for the profile fields.
 * - `setProfilErrors`: Function to set validation errors.
 * - `setFile`: Function to set the profile image file.
 * - `handleChange`: Function to handle input changes.
 * - `handleSubmit`: Function to handle form submission for updating the profile.
 */

const useUpdateProfile = () => {
  const { profile, updateProfileLocal, updateProfileBack } = useUserStore();

  const [file, setFile] = useState<File | null>(null);

  const [profilErrors, setProfilErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      updateProfileLocal({ [name]: value });
    },
    [updateProfileLocal]
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProfilErrors({ firstname: '', lastname: '', email: '' });
    if (profile !== null) {
      try {
        await profileValidationSchema.validate(profile, { abortEarly: false });
        const updatedProfile = { ...profile, image: file };

        console.log(updatedProfile);

        updateProfileBack(updatedProfile);
        console.log('Profile is valid', profile);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = error.inner.reduce(
            (acc: ProfileErrors, err) => {
              if (err.path) {
                acc[err.path as keyof ProfileErrors] = err.message;
              }
              return acc;
            },
            { firstname: '', lastname: '', email: '' }
          );
          setProfilErrors(errors);
          console.log('Field errors:', errors);
        }
      }
    } else {
      console.log('Profile is null');
    }
  };

  return {
    profile,
    profilErrors,
    setProfilErrors,
    setFile,
    handleChange,
    handleSubmit,
  };
};

export default useUpdateProfile;
