import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

type NativeProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ExtraProps = {
  label: string;
};
type Props = NativeProps & ExtraProps;

function ButtonGenerate(
  { color, disabled, label, ...props }: Props,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      {...props}
      className={clsx(
        "text-xs md:text-sm lg:text-base bg-dsOrange hover:bg-dsOrangeDark py-2 px-4 rounded text-white",
        props.className
      )}
    >
      {label}
    </button>
  );
}

const Button = forwardRef<HTMLButtonElement, Props>(ButtonGenerate);
export default Button;
