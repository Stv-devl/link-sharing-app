import React, { useCallback, useState } from 'react';
import useUserStore from '@/store/useUsersStore';

const useUpdateProfile = () => {
  const { profile, updateProfileLocal } = useUserStore();

  const [profilErrors, setProfilErrors] = useState({});

  const updateLinkErrors = useCallback(() => {}, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      updateProfileLocal({ [name]: value });
    },
    [updateProfileLocal]
  );

  const handleSubmit = useCallback(() => {}, []);

  return {
    profile,
    profilErrors,
    setProfilErrors,
    updateLinkErrors,
    handleChange,
    handleSubmit,
  };
};

export default useUpdateProfile;
