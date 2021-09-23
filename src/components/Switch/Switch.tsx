import * as React from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import { AriaCheckboxProps } from '@react-types/checkbox';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';

type Color =
| 'green'
| 'gold';

interface Props extends AriaCheckboxProps {
  disabled?: boolean;
  color?: Color;
}

const Switch = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { disabled, color = 'green' } = props;
  const state = useToggleState(props);

  const fallbackRef = React.useRef<HTMLInputElement>(null);
  const domRef = ref || fallbackRef;

  let { inputProps } = useCheckbox(props, state, fallbackRef);
  let { focusProps } = useFocusRing();


  const classesByColor: Record<Color, string> = {
    green: 'bg-greenCustom-500',
    gold: 'bg-gold-500',
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
      <div className={`rounded-full w-12 h-6 flex justify-end ${inputProps.checked ? classesByColor[color] : 'bg-grey'}`}> 
      <div className={`w-4 h-4 bg-white rounded-full mt-1 transform duration-500 ${inputProps.checked ? 'mr-1 translate-x-0' : 'ml-1 -translate-x-7'}`}>
          
      </div>
</div>
    </label>
  );
});

export { Switch };