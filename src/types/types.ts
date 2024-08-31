import { FormEvent } from 'react';

//.............................//
//.........data types..........//
//.............................//
export interface Users {
  _id: string;
  credentials: {
    email: string;
    password: string;
  };
  links: {
    github: LinkDetail;
    youtube: LinkDetail;
    linkedIn: LinkDetail;
    frontend: LinkDetail;
    twitter: LinkDetail;
    facebook: LinkDetail;
    twitch: LinkDetail;
    devto: LinkDetail;
    codewars: LinkDetail;
    codepen: LinkDetail;
    freecodecamp: LinkDetail;
    gitlab: LinkDetail;
    hashnode: LinkDetail;
  };
}

interface LinkDetail {
  isSelected: boolean;
  url: string;
  label: string;
  color: string;
}

//.............................//
//.........store types.........//
//.............................//
export interface AuthState {
  token: string | null;
  userId: string | null;
  login: (token: string, userId: string) => void;
  logout: () => void;
}

export interface useRouterDataState {
  user: Users | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  setUser: (user: Users) => void;
}

//.............................//
//.........form types..........//
//.............................//
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
//.............................//
//.......component type........//
//.............................//
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

export interface ButtonComponent {
  label: string;
  onClick?: (e: FormEvent) => void;
}

export interface IconWrapperType {
  type: string;
  isSelected: boolean;
  link: string;
}

export interface PreviewBtnType {
  href: string;
  label: string;
}

export interface SettingContainerType {
  type: string;
}

export interface LinkPaginationProps {
  pages: LinkArray[][];
  pageNumbers: number[];
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}

type LinkArray = [string, LinkDetail];

export interface LinkCardProps {
  displayLinks: LinkArray[];
}

export interface usePaginationProps {
  items: LinkArray[];
  itemsPerPage: number;
}

export interface UsePaginationReturn {
  pages: LinkArray[][];
  pageNumbers: number[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
