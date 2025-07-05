import React from 'react';
import { tv } from 'tailwind-variants';

export interface ButtonProps {
  onClick: () => void;
  class: 'iconButton' | 'textButton';
  label?: string;
  icon?: React.ReactNode;
}

const buttonStyles = tv({
  variants: {
    class: {
      iconButton:
        'absolute top-2 right-1 text-gray-400 hover:text-gray-600 bg-transparent hover:bg-gray-100 px-1 py-1 border border-gray-300 rounded-lg',
      textButton:
        'flex items-center px-4 py-2 bg-indigo-900 font-medium text-white hover:bg-indigo-800 rounded-lg gap-x-2 ',
    },
  },
});

export function Button(props: ButtonProps) {
  const className = buttonStyles({
    class: props.class,
  });
  return (
    <button onClick={props.onClick} className={className}>
      {props.icon && <span>{props.icon}</span>}
      {props.label && <span>{props.label}</span>}
    </button>
  );
}
