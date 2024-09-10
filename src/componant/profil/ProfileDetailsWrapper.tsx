import React from 'react';
import Input from '../form/input/Input';

const ProfileDetailsWrapper = () => {
  return (
    <div className="flex flex-col gap-3 bg-background-white p-5 rounded-lg">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10">
        <Input
          name="firstname"
          label="First name*"
          placeholder="e.g. John"
          type="text"
          handleChange={() => {}}
          value=""
          error=""
          autoComplete="firstname"
          iconSrc=""
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10">
        <Input
          name="lastname"
          label="Last name*"
          placeholder="e.g. Appleseed"
          type="text"
          handleChange={() => {}}
          value=""
          error=""
          autoComplete="lastname"
          iconSrc=""
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10">
        <Input
          name="email"
          label="Email"
          placeholder="e.g. alex@email.com"
          type="text"
          handleChange={() => {}}
          value=""
          error=""
          autoComplete="email"
          iconSrc=""
        />
      </div>
    </div>
  );
};

export default ProfileDetailsWrapper;
