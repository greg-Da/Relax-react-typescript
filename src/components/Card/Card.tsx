import * as React from 'react';


type Variant =
  | 'sm'
  | 'md'
  | 'lg'
  | 'full';

interface Props {

  screenWidth?: Variant;

  children: React.ReactNode;
}

export default function Card(props: Props) {
  const { children, screenWidth = 'full' } = props;

  const variants = {
    size: { sm: 'w-2/6', md: 'w-1/2', lg: 'w-4/6', full: 'w-full' },
  };

  return <div className={'bg-white border-0 shadow-lg rounded-lg  ' + variants.size[screenWidth]}>{children}</div>;
}