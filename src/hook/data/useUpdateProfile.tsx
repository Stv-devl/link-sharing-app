import React, { useCallback, useState } from 'react';
import useUserStore from '@/store/useUsersStore';
import * as Yup from 'yup';
import { profileValidationSchema } from '@/utils/validationShema';
import { ProfileErrors } from '@/types/types';

const useUpdateProfile = () => {
  const { profile, updateProfileLocal, updateProfileBack } = useUserStore();

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
        updateProfileBack(profile);
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
    handleChange,
    handleSubmit,
  };
};

export default useUpdateProfile;
