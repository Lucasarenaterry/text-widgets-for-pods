import { Router } from 'express';
import TextWidgetController from '../controllers/text_widget';

const router = Router();

// Text Widget Routes
router.get('/', TextWidgetController.GET_AllTextWidgets);
router.post('/', TextWidgetController.POST_CreateTextWidget);
router.put('/:id', TextWidgetController.PUT_UpdateTextWidget);
router.delete('/:id', TextWidgetController.DELETE_TextWidget);

export default router;
