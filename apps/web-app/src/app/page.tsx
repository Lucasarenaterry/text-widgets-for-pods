'use client';
import { Button } from '../components/button';
import { TextWidget } from '../components/textWidget';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useCallback, useEffect, useState } from 'react';
import { TextWidgetObject } from '../interfaces';
import apiClient from '../client';

export default function Index() {
  const [widgets, setWidgets] = useState<TextWidgetObject[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTextWidgets();
  }, []);

  const fetchTextWidgets = useCallback(async () => {
    const data = await apiClient.textWidgetDao.fetchAllTextWidgets();
    if (Array.isArray(data)) {
      setWidgets(data);
    } else {
      setError(data.error);
    }
  }, []);

  async function handleAddWidget() {
    const newTextWidget = await apiClient.textWidgetDao.createTextWidget();
    if ('error' in newTextWidget) {
      setError(newTextWidget.error);
    } else {
      fetchTextWidgets();
    }
  }

  async function handleSaveUpdatedTextWidget(textWidgetId: string) {
    const textWidgetToSave = widgets.find(
      (widget) => widget.id === textWidgetId
    );
    if (textWidgetToSave) {
      const updatedWidget = await apiClient.textWidgetDao.updateTextWidget(
        textWidgetToSave
      );
      if ('error' in updatedWidget) {
        setError(updatedWidget.error);
      } else {
        fetchTextWidgets();
      }
    }
  }

  async function handleDeleteTextWidget(textWidgetId: string) {
    const success = await apiClient.textWidgetDao.deleteTextWidget(
      textWidgetId
    );
    if (success) {
      fetchTextWidgets();
    } else {
      setError('Failed to delete text widget');
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
      {error && (
        <div className="text-red-500 text-center border border-red-300 bg-red-50 p-4 rounded-lg">
          {error}
        </div>
      )}
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
