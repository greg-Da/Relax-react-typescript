import * as React from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import { AriaCheckboxProps } from '@react-types/checkbox';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';

type Color =
| 'green'
| 'gold';

interface Props extends AriaCheckboxProps {
  disabled?: boolean;
  children: React.ReactNode;
  color?: Color;
  rounded?: boolean;
}

const checkboxClasses = 'text-[1.75rem]';

const CheckBox = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { disabled, children, rounded = 0 , color = 'green' } = props;
  const state = useToggleState(props);

  const fallbackRef = React.useRef<HTMLInputElement>(null);
  const domRef = ref || fallbackRef;

  let { inputProps } = useCheckbox(props, state, fallbackRef);
  let { focusProps } = useFocusRing();


  const classesByColor: Record<Color, string> = {
    green: 'text-greenCustom-500',
    gold: 'text-gold-500',
  }

  return (
    <label
      className={`${disabled ? 'cursor-not-allowed text-grey-disabled' : 'cursor-pointer text-grey'} flex items-center`}
    >
      <VisuallyHidden>
        {disabled ? (
          <input {...inputProps} disabled {...focusProps} ref={domRef} />
        ) : (
          <input {...inputProps} {...focusProps} ref={domRef} />
        )}
      </VisuallyHidden>
      {rounded ? 

      inputProps.checked ? (
        <RiCheckboxCircleFill className={`${checkboxClasses} ${classesByColor[color]}  `} />
      ) : (
        <RiCheckboxBlankCircleLine className={`${checkboxClasses} rounded-full text-grey-300`} />
      )
      
      : 

      inputProps.checked ? (
        <MdCheckBox className={`${checkboxClasses} ${classesByColor[color]}  `} />
      ) : (
        <MdCheckBoxOutlineBlank className={`${checkboxClasses} rounded-full text-grey-300`} />
      )}
      
      <div className="pb-1 pl-2">{children}</div>
    </label>
  );
});

export { CheckBox };