import { FormEvent } from 'react';

export interface Users {
  _id: string;
  credentials: {
    email: string;
    password: string;
  };
  links?: {
    github: string;
    youtube: string;
    linkedIn: string;
    frontend: string;
    twitter: string;
    facebook: string;
    twitch: string;
    devto: string;
    codewars: string;
    codepen: string;
    freecodecamp: string;
    gitlab: string;
    hashnode: string;
  };
}

export interface InputProps {
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  placeholder?: string;
  error?: string;
  autoComplete: string;
  iconSrc: string;
}

export interface FormDataLogin {
  email: string;
  password: string;
}

export interface UseLoginReturn {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormDataLogin;
  loginErrors: FormDataLogin;
}

export interface FormDataSignUp {
  email: string;
  password: string;
  repeat: string;
}

export interface UseSignUpReturn {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormDataSignUp;
  signupErrors: FormDataSignUp;
}

export interface ButtonComponent {
  label: string;
  style: string;
}
