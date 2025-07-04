'use client';
import { Button } from '../components/button';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function Index() {
  return (
    <div className="flex flex-col items-center min-h-screen p-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Text Widgets for Pods
        </h1>
      </div>
      <Button
        label="Add Text Widget"
        onClick={() => {
          console.log('Button clicked');
        }}
        icon={<PlusIcon className="h-5 w-5" />}
      />
    </div>
  );
}
