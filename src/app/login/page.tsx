'use client';

import React from 'react';
import useLogin from '../../hook/auth/useLogin';
import Input from '../../componant/form/input/Input';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/componant/button/Button';

/**
 * The Login component renders a login form where users can enter their email and password to access their account.
 * The form includes validation for both fields and displays an error message if the login credentials are incorrect.
 * Upon form submission, the user data is processed by the `useLogin` hook, which handles authentication.
 * If the user does not have an account, they are provided with a link to navigate to the sign-up page.
 * @returns {JSX.Element} The Login form component.
 */

const Login = (): JSX.Element => {
  const { handleSubmit, handleChange, formData, loginErrors } = useLogin();
  return (
    <section className="flex flex-col bg-white sm:bg-background-white justify-center w-full h-screen">
      <div className=" flex flex-col items-center gap-[51px] w-full px-[8%] sm:px-[0]">
        <Image
          src="/images/logo-devlinks-large.svg"
          alt="logo title login"
          width={183}
          height={40}
          priority
        />
        <div className="flex flex-col items-start gap-[40px] sm:p-[40px] sm:w-[476px]  bg-white">
          <div className="flex flex-col gap-[24px]">
            <h1 className=" text-titleSmall sm:text-title text-dark-gray">
              Login
            </h1>
            <p>Add your details below to get back into the app</p>
          </div>
          <form
            className="flex flex-col gap-[24px] w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-[24px]">
              <div>
                <Input
                  name="email"
                  label="Email adress"
                  placeholder="e.g. alex@email.com"
                  type="text"
                  handleChange={handleChange}
                  value={formData.email}
                  error={loginErrors.email}
                  autoComplete={'email'}
                  iconSrc={'/images/icon-email.svg'}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Input
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  handleChange={handleChange}
                  value={formData.password}
                  error={loginErrors.password}
                  autoComplete={'current-password'}
                  iconSrc={'/images/icon-password.svg'}
                />
                {/*ajouter ce message quand donnnées pas dans data base*/}
                {/* 
              <span className=" text-medium-red">
                {loginErrors &&
                  `We don't find your information in our database`}
              </span>*/}
              </div>
            </div>
            <Button label={'Login'} style={'bg-dark-purple w-full h-[46px]'} />
            <p className="text-base px-[5%] sm:px-[10%] text-center ">
              Don&apos;t have an account?{' '}
              <Link href="/signup">
                <span className="text-dark-purple">Create account</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
