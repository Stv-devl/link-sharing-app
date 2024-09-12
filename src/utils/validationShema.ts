'use client';

import { options } from '@/constantes/constantes';
import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
});

export const signupValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
  repeat: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Password is required'),
});

const SettingUrl = options.reduce((acc, { label, url }) => {
  acc[label.toLowerCase()] = url;
  return acc;
}, {} as Record<string, string>);

export const linkValidationSchema = Yup.object().shape({
  links: Yup.array().of(
    Yup.object({
      url: Yup.string()
        .required('URL is required')
        .test('matches-example', 'Please write a valid URL', function (value) {
          const { label } = this.parent;
          const baseUrl = SettingUrl[label.toLowerCase()];
          if (!baseUrl) {
            return false;
          }
          const regex = new RegExp(`^${baseUrl}/.{1,}$`);
          return regex.test(value);
        }),
      label: Yup.string().required('Choose a plateform'),
    })
  ),
});

export const profileValidationSchema = Yup.object({
  firstname: Yup.string()
    .min(2, '2 characters minimum')
    .required("Can't be empty"),
  lastname: Yup.string()
    .min(2, '2 characters minimum')
    .required("Can't be empty"),
  email: Yup.string().email('Invalid email address').required('Cant be empty'),
});
