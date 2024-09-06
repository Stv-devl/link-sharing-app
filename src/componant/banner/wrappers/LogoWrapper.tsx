import React from 'react';
import { useMediaQuery } from 'react-responsive';
import IconLinkLarge from '../../../assets/logo-devlinks-large.svg';
import IconLinkSmall from '../../../assets/logo-devlinks-small.svg';

const LogoWrapper: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery({ query: '(min-width: 640px)' });

  return isMobile! ? (
    <div className="w-[120px] h-[40px] lg:w-[183px] lg:h-[40px]">
      <IconLinkLarge className="w-full h-full max-w-full max-h-full" />
    </div>
  ) : (
    <IconLinkSmall />
  );
};

export default LogoWrapper;
