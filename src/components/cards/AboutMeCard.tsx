/* eslint-disable @next/next/no-img-element */
import React from 'react';

import IconLink from '@/components/links/IconLink';

import Github from '~/svg/Github.svg';
import Linkedin from '~/svg/Linkedin.svg';

// Props added for customization
const AboutMeCard = ({
  name = 'Patrick Asafe',
  title = 'Desenvolvedor',
  imageUrl = 'https://avatars.githubusercontent.com/u/65199318?v=4',
}) => {
  return (
    <div className='mx-2 mt-4 flex w-full max-w-xs items-stretch justify-between rounded-3xl border px-8 py-4 text-center shadow-lg'>
      <img
        className='h-32 w-32 rounded-full shadow-lg'
        src={imageUrl}
        alt={`${name} profile`}
      />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-lg text-gray-700'>{name}</h1>
        <h3 className='text-sm text-gray-400'>{title}</h3>
        <div>
          <IconLink
            icon={Github}
            href='https://github.com/patrickasafe'
            className='m-2'
            variant='light'
          />
          <IconLink
            icon={Linkedin}
            href='https://www.linkedin.com/in/patrickasafe-webdev/'
            className='m-2'
            variant='light'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
