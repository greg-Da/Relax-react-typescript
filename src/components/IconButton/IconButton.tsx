import * as React from 'react';
import { AriaButtonProps } from '@react-types/button';
import { useButton } from '@react-aria/button';

type Variant = 'red' | 'green' | 'gold';

interface ButtonProps extends AriaButtonProps<'button'> {
  id?: string;
  /** Variant for the button ('red' | 'orange' | 'green' | 'black') */
  variant?: Variant;
  /** Add a down arrow to the start of the component */
  icon: React.ReactNode;

  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const classesByVariant: Record<Variant, string> = {
  red: 'bg-redCustom ',
  green: 'bg-greenCustom-500',
  gold: 'bg-gold-500',
};

/**
 * a simple button with four variants
 *
 * @param props
 * @returns
 */
export default function IconButton(props: ButtonProps) {
  const { id, variant = 'red', icon, onClick, ...ariaProps } = props;
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton({ ...ariaProps, elementType: 'button' }, ref);

  return (
    <>
      <button
        id={id}
        className={`
        ${classesByVariant[variant]}
        inline-flex 
        px-3 py-3
        focus:outline-none rounded-full focus:ring-3 focus:ring-offset-2 focus:ring-opacity-75`}
        onClick={onClick}
        type="button"
        ref={ref}
        {...buttonProps}
      >
        {icon ? <span className={''}>{icon}</span> : ''}
      </button>
    </>
  );
}

export { IconButton };