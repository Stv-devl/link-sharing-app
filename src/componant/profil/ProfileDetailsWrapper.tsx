import React from 'react';
import Input from '../form/input/Input';
import { ProfileDetailsWrapperProps } from '@/types/types';

const ProfileDetailsWrapper: React.FC<ProfileDetailsWrapperProps> = ({
  profile,
  handleChange,
  profilErrors,
}) => {
  return (
    <div className="flex flex-col gap-3 bg-background-white p-5 rounded-lg">
      <div className="flex flex-col items-center sm:flex-row gap-1 sm:gap-10">
        <Input
          name="firstname"
          label="First name*"
          placeholder="e.g. John"
          type="text"
          handleChange={handleChange}
          value={profile?.firstname ?? ''}
          error={profilErrors.firstname}
          autoComplete="firstname"
          iconSrc=""
        />
      </div>
      <div className="flex flex-col items-center sm:flex-row gap-1 sm:gap-10">
        <Input
          name="lastname"
          label="Last name*"
          placeholder="e.g. Appleseed"
          type="text"
          handleChange={handleChange}
          value={profile?.lastname ?? ''}
          error={profilErrors.lastname}
          autoComplete="lastname"
          iconSrc=""
        />
      </div>
      <div className="flex flex-col items-center sm:flex-row gap-1 sm:gap-10">
        <Input
          name="email"
          label="Email"
          placeholder="e.g. alex@email.com"
          type="text"
          handleChange={handleChange}
          value={profile?.email ?? ''}
          error={profilErrors.email}
          autoComplete="email"
          iconSrc=""
        />
      </div>
    </div>
  );
};

export default ProfileDetailsWrapper;
