'use client';
import { useSearchParams } from 'next/navigation';
import { Button } from '../components/button';
import { TextWidget } from '../components/textWidget';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { TextWidgetObject } from '../interfaces';

const widgetData: TextWidgetObject[] = [
  {
    id: 'widget-1',
    text: 'This is a sample text widget. You can edit this text.',
  },
  {
    id: 'widget-2',
    text: 'Another text widget with different content.',
  },
];

export default function Index() {
  const [widgets, setWidgets] = useState<TextWidgetObject[]>(widgetData);

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-[#f5f3e7] gap-y-6">
      <h1 className="text-4xl font-bold text-gray-900 mt-8">
        Text Widgets for Pods
      </h1>
      <Button
        onClick={() => {
          console.log('Button clicked');
        }}
        label="Add Text Widget"
        icon={<PlusIcon className="h-5 w-5" />}
      />
      {widgets.map((widget) => (
        <TextWidget
          key={widget.id}
          id={widget.id}
          text={widget.text}
          onChange={(newText) => {
            console.log('Text changed:', newText);
          }}
          onDelete={() => {
            console.log('Delete button clicked for widget:', widget.id);
          }}
        />
      ))}
    </div>
  );
}
