import { ComponentProps } from 'react';

type Props = {
  variant?: 'primary' | 'secondary' | 'danger';
  wide?: boolean;
} & ComponentProps<'button'>;

const Button = ({
  variant = 'primary',
  wide = false,
  children,
  ...rest
}: Props) => {
  let buttonClass = `${rest.className ?? ''} px-4 py-2 rounded-md font-medium`;
  if (wide) {
    buttonClass += ' w-full';
  }
  switch (variant) {
    case 'primary':
      buttonClass += ' bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'secondary':
      buttonClass += ' bg-gray-300 text-gray-700 hover:bg-gray-400';
      break;
    case 'danger':
      buttonClass += ' bg-red-500 text-white hover:bg-red-600';
      break;
    default:
      break;
  }

  delete rest.className;

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
