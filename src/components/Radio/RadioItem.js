import React from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { useRadioGroup, useRadio } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';

let RadioContext = React.createContext(null);
function RadioGroup(props) {
  let {children, label, variant = 'green', orientation = 'vertical'} = props;
  let state = useRadioGroupState(props);
  state.variant = variant
  let {radioGroupProps, labelProps} = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps} className={` ${orientation ==='horizontal' ? 'flex' : ''}`}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

function Radio(props) {
  let {children} = props;
  let state = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let {inputProps} = useRadio(props, state, ref);
  let {isFocusVisible, focusProps} = useFocusRing();

  let isSelected = state.selectedValue === props.value;
  let strokeWidth = 2;
  let color = state.variant === 'green' ?  "#42563d" : "#d4b279"

  return (
    <label style={{display: 'flex', alignItems: 'center'}}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{marginRight: 4}}>
        <circle
          cx={12}
          cy={12}
          r={7}
          fill={isSelected ? color : "none"}
          stroke={ 'gray'}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={12}
          cy={12}
          r={6}
          fill={"transparent"}
          stroke={ 'white'}
          strokeWidth={1}
        />
      </svg>
      {children}
    </label>
  );
}

export { Radio, RadioGroup };