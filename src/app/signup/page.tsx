/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Link from 'next/link';
import useSignUp from '../../hook/auth/useSignUp';
import Input from '../../componant/form/input/Input';
import Button from '@/componant/button/Button';
import IconLinkLarge from '../../assets/logo-devlinks-large.svg';
import Modal from '@/componant/modal/Modal';

/**
 * The SignUp component renders a sign-up form where users can create a new account.
 * The form includes fields for username, email, password, and repeat password, and it handles validation errors.
 * Upon form submission, the user data is processed by the `useSignUp` hook.
 * If the user already has an account, they are given the option to navigate to the login page.
 * @returns {JSX.Element} The SignUp form component.
 */

const SignUp = (): JSX.Element => {
  const { handleSubmit, handleChange, formData, signupErrors } = useSignUp();

  return (
    <section className="flex flex-col bg-white  sm:bg-background-white justify-center w-full h-full">
      <div className=" flex flex-col items-center gap-[51px] w-full px-[5%] sm:px-[0]">
        <div className="w-[130px] h-[40px] lg:w-[183px] lg:h-[40px]">
          <IconLinkLarge className="w-full h-full max-w-full max-h-full" />
        </div>
        <div className="flex flex-col items-start gap-[40px] sm:p-[40px] sm:w-[476px]  bg-white">
          <h1 className=" text-titleSmall sm:text-title text-dark-gray">
            Create account
          </h1>
          <p className="mt-4 mb-8">Let's get you started sharing your links!</p>
          <form
            className="flex flex-col gap-[20px] w-full"
            onSubmit={handleSubmit}
          >
            <div className="input-wrapper">
              <Input
                name="email"
                label="Email adress"
                placeholder="e.g. alex@email.com"
                type="text"
                handleChange={handleChange}
                value={formData.email}
                error={signupErrors.email}
                autoComplete={'email'}
                iconSrc={'/images/icon-email.svg'}
              />
            </div>
            <div className="input-wrapper">
              <Input
                name="password"
                label="Password"
                placeholder="At least 8 characters"
                type="password"
                handleChange={handleChange}
                value={formData.password}
                error={signupErrors.password}
                autoComplete={'new-password'}
                iconSrc={'/images/icon-password.svg'}
              />
            </div>
            <div className="input-wrapper">
              <Input
                name="repeat"
                label="Confirm password"
                placeholder="At least 8 characters"
                type="password"
                handleChange={handleChange}
                value={formData.repeat}
                error={signupErrors.repeat}
                autoComplete={'new-password'}
                iconSrc={'/images/icon-password.svg'}
              />
            </div>
            <p className="text-xs">
              Password must contain at least 8 characters
            </p>
            <Button label={'Create a new account'} />
            <p className="text-base px-[5%] sm:px-[10%] text-center ">
              Already have an account?{' '}
              <Link href="/login">
                <span className="text-dark-purple">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Modal />
    </section>
  );
};

export default SignUp;
