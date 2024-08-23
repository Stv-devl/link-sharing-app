'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSignUp from '../../hook/auth/useSignUp';
import Input from '../../componant/form/input/Input';

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
    <section className="flex flex-col items-center gap-[83px] min-h-screen">
      <div className="flex flex-col justify-center items-start gap-[40px] px-[32px] py-[32px] mx-[5%] w-full max-w-[400px] bg-[#161D2F] rounded-[15px] ">
        <h1 className="text-[32px]">Create account</h1>
        <p>Let's get you started sharing your links!</p>
        <form
          className="flex flex-col gap-[20px] w-full"
          onSubmit={handleSubmit}
        >
          <div className="input-wrapper">
            <Input
              name="email"
              placeholder="Email"
              type="email"
              handleChange={handleChange}
              value={formData.email}
              error={signupErrors}
              autoComplete={'email'}
            />
          </div>
          <div className="input-wrapper">
            <Input
              name="password"
              placeholder="Password"
              type="password"
              handleChange={handleChange}
              value={formData.password}
              error={signupErrors}
              autoComplete={'new-password'}
            />
          </div>
          <div className="input-wrapper">
            <Input
              name="repeat"
              placeholder="Repeat password"
              type="password"
              handleChange={handleChange}
              value={formData.repeat}
              error={signupErrors}
              autoComplete={'new-password'}
            />
          </div>
          <p>Password must contain at least 8 characters</p>

          <button
            type="submit"
            className="bg-[#FC4747] duration-500 ease-in-out hover:bg-slate-50 hover:text-black text-base w-full h-[48px] rounded-lg"
          >
            Create new account
          </button>
          <p className="text-base px-[5%] sm:px-[10%]">
            Already have an account?{' '}
            <Link href="/login">
              <span className="text-[#FC4747] text-base ml-[5px]">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
