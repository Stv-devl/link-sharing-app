import { FormEvent } from 'react';
import { SingleValueProps } from 'react-select';

//.............................//
//.........data types..........//
//.............................//
export interface Users {
  _id: string;
  credentials: {
    email: string;
    password: string;
  };
  links: LinkDetail[] | [] | null;
  profile: ProfilDetail | null;
}

export interface Link {
  key: string;
  label: string;
  url: string;
  color: string;
  isLocal: boolean;
}

export interface LinkDetail {
  key: string;
  label: string;
  url: string;
  color: string;
  isLocal: boolean;
}

export interface ProfilDetail {
  image?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
}

export type LinkDetailArray = LinkDetail[];

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
  link: LinkDetailArray | null;
  profile: ProfilDetail | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  setUser: (user: Users) => void;
  setLink: (link: LinkDetailArray) => void;
  addLink: (newLink: LinkDetail) => void;
  updateLinkLocal: (
    oldKey: string | null,
    newItems: LinkDetail[] | LinkDetail
  ) => void;
  updateProfileLocal: (value: Partial<ProfilDetail>) => void;
  removeLink: (linkKey: string) => void;
  removeLinkBack: (linkKey: string) => void;
  updateLinkBack: (validateLinks: LinkDetailArray) => Promise<void>;
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

export interface LinkError {
  url?: string;
  label?: string;
}

//.............................//
//.....Components props........//
//.............................//
export interface InputProps {
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
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

export interface LinkWrapperProps {
  id: string;
  label: string;
  color: string;
  url: string;
}

export interface LinkPaginationProps {
  pages: LinkDetail[][];
  pageNumbers: number[];
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}

export interface CreateLinkProps {
  link: LinkDetail;
  number: number;
  removeLink: (linkKey: string) => void;
  removeLinkBack: (linkKey: string) => void;
  handleChange: (
    number: number,
    key: string,
    field: string,
    value: LinkDetail | UrlValue
  ) => void;
  linkErrors: Record<number, LinkError>;
}

export interface DropDownProps {
  labelText: string;
  value: string;
  name: string;
  handleOption: (selectedOption: LinkDetail) => void;
  error: string;
}

export interface ProfileDetailsWrapperProps {
  profile: ProfilDetail | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DisplayProfileProps {
  profile: ProfilDetail | null;
}
//.............................//
//......useAddLink Hook........//
//.............................//
export type LinkErrors = {
  [index: number]: LinkError;
};

export interface UrlValue {
  url: string;
}

export interface FieldErrors {
  [index: number]: {
    [field: string]: string;
  };
}

//.............................//
//....useManageOption Hook.....//
//.............................//

export interface UseManageOptionsProps {
  value: string;
  options: LinkDetailArray;
}
//.............................//
//....useDragAndDrop Hook......//
//.............................//

//.............................//
//.......react-select..........//
//.............................//
export interface CustomDefaultOptionProps extends SingleValueProps<LinkDetail> {
  data: LinkDetail;
}

export interface OptionTypeProps {
  label: string;
  value: string;
}

export interface OptionsProps {
  data: {
    label: string;
  };
  innerRef: React.Ref<HTMLDivElement>;
  innerProps: React.HTMLAttributes<HTMLDivElement>;
}

//update service
export interface UpdateLinkResponse {
  success: boolean;
  message?: string;
  links?: LinkDetailArray;
}
