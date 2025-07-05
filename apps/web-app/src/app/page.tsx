'use client';
import { Button } from '../components/button';
import { TextWidget } from '../components/textWidget';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { TextWidgetObject } from '../interfaces';
import ApiClient from '../client';

export default function Index() {
  const apiClient = new ApiClient('http://localhost:3000');
  const [widgets, setWidgets] = useState<TextWidgetObject[]>([]);

  useEffect(() => {
    fetchTextWidgets();
  }, []);

  async function fetchTextWidgets() {
    const data = await apiClient.textWidgetDao.fetchAllTextWidgets();
    setWidgets(data);
  }

  async function handleAddWidget() {
    const newTextWidget = await apiClient.textWidgetDao.createTextWidget();
    if (newTextWidget) {
      fetchTextWidgets();
    }
  }

  async function handleSaveUpdatedTextWidget(textWidgetId: string) {
    const widgetToSave = widgets.find((widget) => widget.id === textWidgetId);
    if (widgetToSave) {
      await apiClient.textWidgetDao.updateTextWidget(widgetToSave);
    }
  }

  async function handleDeleteTextWidget(textWidgetId: string) {
    const success = await apiClient.textWidgetDao.deleteTextWidget(
      textWidgetId
    );
    if (success) {
      fetchTextWidgets();
    }
  }

  function handleOnChangeTextWidget(id: string, newText: string) {
    const updatedWidgets = widgets.map((widget) =>
      widget.id === id ? { ...widget, text: newText } : widget
    );
    setWidgets(updatedWidgets);
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-[#f5f3e7] gap-y-6">
      <h1 className="text-4xl font-bold text-gray-900 mt-8">
        Text Widgets for Pods
      </h1>
      <Button
        onClick={handleAddWidget}
        class="textButton"
        label="Add Text Widget"
        icon={<PlusIcon className="h-5 w-5" />}
      />
      {widgets.map((widget) => (
        <TextWidget
          key={widget.id}
          id={widget.id}
          text={widget.text}
          onChange={(newText) => {
            handleOnChangeTextWidget(widget.id, newText);
          }}
          onBlur={() => {
            handleSaveUpdatedTextWidget(widget.id);
          }}
          onDelete={() => {
            handleDeleteTextWidget(widget.id);
          }}
        />
      ))}
    </div>
  );
}
