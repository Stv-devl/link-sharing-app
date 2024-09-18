import {
  DragEndEvent,
  KeyboardSensorOptions,
  PointerSensorOptions,
  SensorDescriptor,
} from '@dnd-kit/core';
import { FormEvent } from 'react';
import { SingleValueProps } from 'react-select';

//.............................//
//.........data types..........//
//.............................//

//user
export interface UserCredentials {
  email: string;
  password: string;
}

export interface Users {
  _id: string;
  credentials: UserCredentials;
  links: LinkDetail[] | [] | null;
  profile: ProfilDetail | null;
}

//links
export interface LinkDetail {
  key: string;
  label: string;
  url: string;
  color: string;
  isLocal?: boolean;
}

export type LinkDetailArray = LinkDetail[];

//profile
export interface ProfilDetail {
  image?: File | string | null;
  firstname?: string;
  lastname?: string;
  email?: string;
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
  updateLinkBack: (validateLinks: LinkDetailArray) => Promise<void>;
  updateProfileLocal: (value: Partial<ProfilDetail>) => void;
  updateProfileBack: (updatedProfile: ProfilDetail) => Promise<void>;
  removeLink: (linkKey: string) => void;
  removeLinkBack: (linkKey: string) => void;
}

export interface ModalState {
  isOpen: boolean;
  content: string | null;
  openModal: (content: string) => void;
  closeModal: () => void;
}

//.............................//
//.........form types..........//
//.............................//

//login

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

//signup
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

//errors
export interface LinkError {
  url?: string;
  label?: string;
}

export interface ProfileErrors {
  firstname: string;
  lastname: string;
  email: string;
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
  profilErrors: Record<string, string>;
}

export interface DisplayProfileProps {
  profile: ProfilDetail | null;
}

export interface ProfilePictureWrapperProps {
  setFile: (file: File) => void;
}

//.............................//
//.....drag and drop Hook......//
//.............................//

export interface UseDragAndDropReturn {
  link: LinkDetail[] | null;
  sensors: SensorDescriptor<PointerSensorOptions | KeyboardSensorOptions>[];
  handleDragEnd: (event: DragEndEvent) => void;
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

export interface UseAddLinkReturn {
  link: LinkDetail[] | null;
  removeLink: (linkKey: string) => void;
  removeLinkBack: (linkKey: string) => void;
  linkErrors: LinkErrors;
  handleAddLink: () => void;
  handleChange: (
    index: number,
    key: string,
    field: string,
    value: LinkDetail | UrlValue
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

//.............................//
//....useManageOption Hook.....//
//.............................//

export interface UseManageOptionReturn {
  defaultOption: LinkDetail | null;
  filteredOptions: LinkDetail[];
}

export interface UseManageOptionsProps {
  value: string;
  options: LinkDetailArray;
}

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

export interface UpdateProfileResponse {
  success: boolean;
  message?: string;
  profile?: ProfilDetail;
}
