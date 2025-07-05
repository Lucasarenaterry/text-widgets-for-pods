import { Request, Response } from 'express';
import { TextWidgetModel } from '../models/text_widget';

export type TextWidgetObject = {
  id: string;
  text: string;
};

export function TextWidgetController(widgetModel: TextWidgetModel) {
  return {
    GET_AllTextWidgets: (req: Request, res: Response) => {
      const widgets = widgetModel.fetchAll();
      res.json(widgets);
    },

    POST_CreateTextWidget: (req: Request, res: Response) => {
      const newWidget = widgetModel.create();

      if (!newWidget) {
        return res.status(400).json({ error: 'Failed to create text widget' });
      }

      res.status(201).json(newWidget);
    },

    PUT_UpdateTextWidget: (req: Request, res: Response) => {
      const { id } = req.params;
      const { text } = req.body;

      if (!id || !text) {
        return res
          .status(400)
          .json({ error: 'Text widget ID and text are required' });
      }

      const updatedWidget = widgetModel.update(id, text);
      if (!updatedWidget) {
        return res.status(404).json({ error: 'Text widget not found' });
      }
      res.json(updatedWidget);
    },

    DELETE_TextWidget: (req: Request, res: Response) => {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ error: 'Text widget ID is required' });
      }

      const deleted = widgetModel.delete(id);
      if (!deleted) {
        return res.status(404).json({ error: 'Text widget not found' });
      }
      res.status(204).send();
    },
  };
}
