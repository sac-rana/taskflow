import { MouseEventHandler } from 'react';

type Props = {
  type?: 'primary' | 'secondary' | 'danger';
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
  wide?: boolean;
};

const Button = ({
  type = 'primary',
  wide = false,
  onClick,
  children,
}: Props) => {
  let buttonClass = 'px-4 py-2 rounded-md font-medium';
  if (wide) {
    buttonClass += ' w-full';
  }
  switch (type) {
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

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
