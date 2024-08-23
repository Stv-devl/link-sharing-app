'use client';

import { FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/useAuthStore';
import apiLogin from '../../service/apiLogin';
import { FormDataLogin, UseLoginReturn } from '../../types/types';
import { loginSchema } from '@/src/shema/validationShema';
import * as Yup from 'yup';
/**
 * Custom hook for handling login functionality.
 * Manages form state, handles input changes, and submits login data.
 * @returns {object} An object containing:
 * - `handleSubmit`: Function to handle form submission for logging in the user.
 * - `handleChange`: Function to handle changes to the form inputs.
 * - `formData`: The current state of the login form data.
 * - `loginErrors`: Boolean indicating if there were errors during login.
 */

const useLogin = (): UseLoginReturn => {
  const [formData, setFormData] = useState<FormDataLogin>({
    email: '',
    password: '',
  });
  const [loginErrors, setLoginErrors] = useState<string>('');

  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  /**
   * Handles changes to the form inputs.
   * @param updates - An object containing the updated form values.
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setLoginErrors('');
  }, []);

  /**
   * Handles form submission for logging in the user.
   * @param e - The form submission event.
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      const { token, userId } = await apiLogin(
        formData.email,
        formData.password
      );
      login(token, userId);
      router.push('/home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setLoginErrors(error.errors.join(', '));
      } else {
        console.error('Login failed:', error);
        setLoginErrors('Failed to log in');
      }
    }
  };

  return {
    handleSubmit,
    handleChange,
    formData,
    loginErrors,
  };
};

export default useLogin;
