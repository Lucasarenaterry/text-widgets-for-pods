import { Router } from 'express';
import { ulid } from 'ulid';

export type TextWidgetObject = {
  id: string;
  text: string;
};

const router = Router();

// Temporary in memory storage
let widgets: TextWidgetObject[] = [];

// GET all text widgets
router.get('/', (req, res) => {
  res.json(widgets);
});

// POST create new text widget
router.post('/', (req, res) => {
  const widget: TextWidgetObject = {
    id: ulid(),
    text: '',
  };
  widgets.push(widget);
  res.status(201).json(widget);
});

// PUT update text widget by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = widgets.findIndex((w) => w.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Text widget not found' });
  }

  widgets[index] = { ...widgets[index], ...req.body };
  res.json(widgets[index]);
});

// DELETE text widget by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = widgets.findIndex((w) => w.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Text widget not found' });
  }

  widgets.splice(index, 1);
  res.status(204).send();
});

export default router;
