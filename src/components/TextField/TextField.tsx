import * as React from "react";

type VariantType = "email" | "password" | "text";
type Width = "sm" | "md" | "lg" | "full";

interface Props {
  /** 
  Text to be displayed
   */
  placeholder?: string;
  /** 
  /** 
  The value of the input
   */
  variant?: string;
  /** 
  screenWidth  of the form
   */
  screenWidth?: Width;
  /** 
  Put an Icon at the start of the form
   */
  beginIcon?: React.ReactNode;
  /** 
  Put an Icon at the end of the form
   */
  endIcon?: React.ReactNode;
  /** 
  The color of the textfield
   */
  iconColor?: string;
  /** 
  Type of textfield (text/password/email)
   */
  type?: VariantType;
}

export const TextField = React.forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    const {
      placeholder,
      variant = "default",
      screenWidth,
      beginIcon,
      endIcon,
      type = "text",
      iconColor = "text-gray-400",
    } = props;



    let size = "";
    if (screenWidth === "sm") {
      size = "w-2/6";
    } else if (screenWidth === "md") {
      size = "w-1/2";
    } else if (screenWidth === "lg") {
      size = "w-4/6";
    } else if (screenWidth === "full") {
      size = "w-full";
    }

    let variants = { label: "", form: "", input: "" };
    if (variant === "default") {
      variants.form =
        "border-gray-300 focus-within:border-blue-300 rounded-full py-5";
      variants.input =
        "bg-opacity-50  block w-11/12 text-black focus:outline-none placeholder-grey-300";
    } else if (variant === "required") {
      variants.form =
      "border-red-400 rounded-full";
      variants.input =
      "bg-transparent ml-4 mr-3 m-auto mt-1.5 block w-11/12 placeholder-grey-300 text-black focus:outline-none"
    } else if (variant === "disabled") {
      variants.form =
      "border-grey-disabled border-opacity-60 rounded-full";
      variants.input =
      "bg-white ml-4 mr-3 m-auto mt-1.5 block w-11/12 placeholder-grey-400 placeholder-opacity-60 cursor-not-allowed focus:outline-none"
    }

    let paddingTextField =
      (beginIcon ? " pl-6 " : "") + (endIcon ? " pr-6 " : "");
    return (
      <div className={`${size}`}>

        <form className={`h-8 items-center flex border ${variants.form}`}>
          {beginIcon ? (
            <span
              data-testid="beginIcon"
              className={"absolute text-2xl m-1 " + iconColor}
            >
              {beginIcon}
            </span>
          ) : (
            ""
          )}
          {variant === "disabled" ? (
            <input
              disabled
              className={`ml-4 ${variants.input} ${paddingTextField}`}
              type="text"
              placeholder={placeholder}
              ref={ref}
            />
          ) : (
            <input
              className={`ml-4 ${variants.input} ${paddingTextField}`}
              type={type}
              placeholder={placeholder}
              ref={ref}
            />
          )}
          {endIcon ? (
            <span
              data-testid="endIcon"
              className={"text-2xl mr-2 " + iconColor}
            >
              {endIcon}
            </span>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
);