import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Button } from './button';

export interface TextWidgetProps {
  id: string;
  text: string;
  onChange: (newText: string) => void;
  onBlur: () => void;
  onDelete: () => void;
}

export function TextWidget(props: TextWidgetProps) {
  return (
    <div className="relative w-full max-w-lg p-9 bg-white border border-gray-300 rounded-lg">
      <Button
        onClick={props.onDelete}
        icon={<TrashIcon className="h-5 w-5" />}
        class="iconButton"
      />
      <textarea
        id={props.id}
        className="w-full h-24 text-gray-800 bg-white border text-center pt-2 border-gray-300 rounded-lg focus:ring-blue-500"
        placeholder="Enter some text..."
        value={props.text}
        onChange={(e) => props.onChange(e.target.value)}
        onBlur={props.onBlur}
      />
    </div>
  );
}
