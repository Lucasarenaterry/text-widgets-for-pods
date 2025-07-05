import { Router } from 'express';
import { TextWidgetModel } from '../models/text_widget';
import { TextWidgetController } from '../controllers/text_widget';

export default function setUpWidgetRoutes(router: Router) {
  const widgetModel = new TextWidgetModel();
  const textWidgetController = TextWidgetController(widgetModel);

  // Text Widget Routes
  router.get('/', textWidgetController.GET_AllTextWidgets);
  router.post('/', textWidgetController.POST_CreateTextWidget);
  router.put('/:id', textWidgetController.PUT_UpdateTextWidget);
  router.delete('/:id', textWidgetController.DELETE_TextWidget);

  router.use('/api/widgets', router);
}
