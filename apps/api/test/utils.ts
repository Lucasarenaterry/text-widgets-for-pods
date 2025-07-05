import express from 'express';
import { TextWidgetController } from '../src/controllers/text_widget';
import { TextWidgetModel } from '../src/models/text_widget';

export function createTestingApp(mockModel: TextWidgetModel) {
  const app = express();
  app.use(express.json());

  const router = express.Router();
  const controller = TextWidgetController(mockModel);

  router.get('/', controller.GET_AllTextWidgets);
  router.post('/', controller.POST_CreateTextWidget);
  router.put('/:id', controller.PUT_UpdateTextWidget);
  router.delete('/:id', controller.DELETE_TextWidget);

  app.use('/api/widgets', router);

  return app;
}
