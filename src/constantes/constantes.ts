import Icongithub from '../assets/icon-github.svg';
import Iconfrontendmentor from '../assets/icon-frontend.svg';
import Icontwitter from '../assets/icon-twitter.svg';
import Iconlinkedin from '../assets/icon-linkedin.svg';
import Iconyoutube from '../assets/icon-youtube.svg';
import Icontwitch from '../assets/icon-twitch.svg';
import Icondevto from '../assets/icon-devto.svg';
import Iconcodewars from '../assets/icon-codewars.svg';
import Iconcodepen from '../assets/icon-codepen.svg';
import Iconfreecodecamp from '../assets/icon-freecodecamp.svg';
import Icongitlab from '../assets/icon-gitlab.svg';
import Iconhashnode from '../assets/icon-hashnode.svg';
import Iconfacebook from '../assets/icon-facebook.svg';

export const initialSignUpState = {
  credentials: {
    email: '',
    password: '',
  },
  links: [],
  profile: {
    image: '',
    firstname: '',
    lastname: '',
  },
};

export const options = [
  { key: '01', label: 'GitHub', url: 'github.com', color: 'link-black' },
  { key: '02', label: 'YouTube', url: 'youtube.com', color: 'link-red' },
  { key: '03', label: 'LinkedIn', url: 'linkedin.com', color: 'link-blue' },
  { key: '04', label: 'Twitter', url: 'twitter.com', color: 'link-light-blue' },
  {
    key: '05',
    label: 'Facebook',
    url: 'facebook.com',
    color: 'link-darkest-blue',
  },
  { key: '06', label: 'Twitch', url: 'twitch.com', color: 'link-pink' },
  { key: '07', label: 'Dev.to', url: 'dev.to', color: 'link-dark-gray' },
  {
    key: '08',
    label: 'Codewars',
    url: 'codewars.com',
    color: 'link-dark-orange',
  },
  { key: '09', label: 'CodePen', url: 'codepen.com', color: 'link-green' },
  {
    key: '10',
    label: 'FreeCodeCamp',
    url: 'freecodecamp.org',
    color: 'link-darkest-purple',
  },
  { key: '11', label: 'GitLab', url: 'gitlab.com', color: 'link-dark-orange' },
  {
    key: '12',
    label: 'Hashnode',
    url: 'hashnode.com',
    color: 'link-dark-blue',
  },
  {
    key: '13',
    label: 'Frontend Mentor',
    url: 'frontendmentor.io',
    color: 'white',
  },
];

export const navItems = [
  { type: 'link', path: '/home' },
  { type: 'profil', path: '/profile' },
];

type IconComponents = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const icones: IconComponents = {
  Icongithub,
  Iconfrontendmentor,
  Icontwitter,
  Iconlinkedin,
  Iconyoutube,
  Icontwitch,
  Icondevto,
  Iconcodewars,
  Iconcodepen,
  Iconfreecodecamp,
  Icongitlab,
  Iconhashnode,
  Iconfacebook,
};
