'use client';
import React from 'react';
import Input from '../form/input/Input';
import { ProfileDetailsWrapperProps } from '@/types/types';

/**
 * ProfileDetailsWrapper renders input fields for editing user profile details.
 * It includes inputs for first name, last name, and email, handling changes and displaying validation errors.
 * @param {ProfileDetailsWrapperProps} props - Properties for the ProfileDetailsWrapper component.
 * @param {ProfilDetail} props.profile - The user's profile data containing firstname, lastname, and email.
 * @param {(field: string, value: string) => void} props.handleChange - Function to handle input changes.
 * @param {Record<string, string>} props.profilErrors - Object containing validation errors for each profile field.
 * @returns {JSX.Element} The rendered ProfileDetailsWrapper component.
 */

const ProfileDetailsWrapper: React.FC<ProfileDetailsWrapperProps> = ({
  profile,
  handleChange,
  profilErrors,
}: ProfileDetailsWrapperProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 bg-background-white p-5 rounded-lg">
      <div className="flex flex-col sm:items-center sm:flex-row gap-1 sm:gap-10">
        <Input
          name="firstname"
          label="First name*"
          placeholder="e.g. John"
          type="text"
          handleChange={handleChange}
          value={profile?.firstname ?? ''}
          error={profilErrors.firstname}
          autoComplete="given-name"
          iconSrc=""
        />
      </div>
      <div className="flex flex-col sm:items-center sm:flex-row gap-1 sm:gap-10">
        <Input
          name="lastname"
          label="Last name*"
          placeholder="e.g. Appleseed"
          type="text"
          handleChange={handleChange}
          value={profile?.lastname ?? ''}
          error={profilErrors.lastname}
          autoComplete="family-name"
          iconSrc=""
        />
      </div>
      <div className="flex flex-col sm:items-center sm:flex-row gap-1 sm:gap-10">
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
