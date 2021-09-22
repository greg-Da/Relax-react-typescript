import * as React from 'react';
import { AriaButtonProps } from '@react-types/button';
import { useButton } from '@react-aria/button';

type Variant =
  | 'green'
  | 'gold'
  | 'red'
  | 'disabled'
  | 'outline'
  | 'outlineDisabled';

  type ScreenWidth =
  | 'sm'
  | 'md'
  | 'xl'
  | 'xxl';

  type ScreenHeight =
  | 'sm'
  | 'md'
  | 'xl'
  | 'xxl';

  type Rounded =
  | 'none'
  | 'rounded'
  | 'full';

interface ButtonProps extends AriaButtonProps<'button'> {
  id?: string;
  /** Variant for the button ('green' | 'gold' | 'red' | 'disabled' | 'outline' | 'outlinegoldDisabled') */
  variant?: Variant;
  /** Size */
  screenWidth?: ScreenWidth;
    /** Size */
  screenHeight?: ScreenHeight;
  /** Add a down arrow to the start of the component */
  beginIcon?: React.ReactNode;
  /** Add a down arrow to the end of the component */
  endIcon?: React.ReactNode;
  /** Text to display */
  children?: React.ReactNode;
  /** Round corner */
  rounded?: Rounded;
}

const classesByVariant: Record<Variant, string> = {
  green: 'bg-greenCustom-500 hover:bg-greenCustom-400 text-white',
  gold: 'bg-gold-500 hover:bg-gold-400 text-white',
  red: 'bg-redCustom hover:bg-redCustom-light text-white',
  disabled: 'cursor-not-allowed bg-grey text-white',
  outline: 'bg-transparent hover:bg-white hover:bg-opacity-60 hover:text-white text-pink border-2 border-pink',
  outlineDisabled:
    'bg-transparent cursor-not-allowed border-2 border-gray-300 hover:border-gray-300 hover:text-gray-300 text-gray-300 ',
};

const classesByWidth: Record<ScreenWidth, string> = {
  sm: 'w-20',
  md: 'w-40',
  xl: 'w-60',
  xxl: 'w-80'
}

const classesByHeight: Record<ScreenHeight, string> = {
  sm: 'py-2',
  md: 'py-3',
  xl: 'py-4',
  xxl: 'py-5'
}

const classesByRounded: Record<Rounded, string> = {
  none: '',
  rounded: 'rounded',
  full: 'rounded-full',
}

/**
 * a simple button with four variants
 *
 * @param props
 * @returns
 */
export default function Button(props: ButtonProps) {
  const { id, variant = 'green', screenWidth = 'md', screenHeight = 'md', rounded = 'none', beginIcon, endIcon, children, ...ariaProps } = props;
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton({ ...ariaProps, elementType: 'button' }, ref);

  return (
    <button
      id={id}
      
      className={`
      ${classesByVariant[variant]} 
      font-semibold text-field text-xs
      ${classesByWidth[screenWidth]} 
      focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-opacity-75  
      ${classesByRounded[rounded]} 
      ${classesByHeight[screenHeight]}
      `}
      type="button"
      ref={ref}
      {...buttonProps}
    >
      {beginIcon ? <span className={'pr-7'}>{beginIcon}</span> : ''}
      {children}
      {endIcon ? <span className={'pl-7'}>{endIcon}</span> : ''}
    </button>
  );
}

export { Button };
