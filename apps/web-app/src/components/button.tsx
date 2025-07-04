import React from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-lg"
    >
      {props.icon && <span className="mr-2">{props.icon}</span>}
      <span>{props.label}</span>
    </button>
  );
}