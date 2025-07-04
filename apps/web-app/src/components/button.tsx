import React from 'react';

export interface ButtonProps {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  additionalCSS?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`flex items-center px-4 py-2 bg-indigo-900 font-medium text-white hover:bg-indigo-800 rounded-lg gap-x-2 ${props.additionalCSS}`}
    >
      {props.icon && <span>{props.icon}</span>}
      {props.label && <span>{props.label}</span>}
    </button>
  );
}
