import { Request, Response } from 'express';
import { ulid } from 'ulid';

export type TextWidgetObject = {
  id: string;
  text: string;
};

// Temporary in memory storage
let widgets: TextWidgetObject[] = [];

export default {
  GET_AllTextWidgets: (req: Request, res: Response) => {
    res.json(widgets);
  },

  POST_CreateTextWidget: (req: Request, res: Response) => {
    const widget: TextWidgetObject = {
      id: ulid(),
      text: '',
    };
    widgets.push(widget);
    res.status(201).json(widget);
  },

  PUT_UpdateTextWidget: (req: Request, res: Response) => {
    const { id } = req.params;
    const index = widgets.findIndex((w) => w.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Text widget not found' });
    }

    widgets[index] = { ...widgets[index], ...req.body };
    res.json(widgets[index]);
  },

  DELETE_TextWidget: (req: Request, res: Response) => {
    const { id } = req.params;
    const index = widgets.findIndex((w) => w.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Text widget not found' });
    }

    widgets.splice(index, 1);
    res.status(204).send();
  },
};
