'use client';

import { FormEvent, useCallback, useState } from 'react';
import apiSignup from '../../service/apiSignup';
import { FormDataSignUp, UseSignUpReturn } from '../../types/types';
import { useRouter } from 'next/navigation';
import { signupValidationSchema } from '../../utils/validationShema';
import * as Yup from 'yup';

/**
 * Custom hook for handling user sign-up functionality.
 * Manages form state, validates form data, and submits the sign-up request.
 *
 * @returns {UseSignUpReturn} An object containing:
 * - `handleSubmit`: Function to handle form submission for signing up a new user.
 * - `handleChange`: Function to handle changes to the form inputs.
 * - `formData`: The current state of the sign-up form data.
 * - `signupErrors`: An object containing any validation errors from the sign-up form.
 */

const useSignUp = (): UseSignUpReturn => {
  const [formData, setFormData] = useState<FormDataSignUp>({
    email: '',
    password: '',
    repeat: '',
  });
  const [signupErrors, setSignupErrors] = useState<string>('');
  const router = useRouter();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupErrors('');
    try {
      await signupValidationSchema.validate(formData, { abortEarly: false });
      const newUser = await apiSignup(formData.email, formData.password);
      console.log('Signup successful', newUser);
      router.push('/login');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setSignupErrors(error.errors.join(', '));
      } else {
        console.error('Signup failed:', error);
        setSignupErrors('Signup process encountered an error');
      }
    }
  };

  return {
    handleSubmit,
    handleChange,
    formData,
    signupErrors,
  };
};

export default useSignUp;
