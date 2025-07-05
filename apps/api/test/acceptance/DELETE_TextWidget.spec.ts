import request from 'supertest';
import { createTestingApp } from '../utils';
import { TextWidgetModel } from 'apps/api/src/models/text_widget';

describe('Controller: DELETE_TextWidget', () => {
  it('Should return a 204 if the text widget is deleted', async () => {
    const mockModel = {
      delete: jest.fn().mockReturnValue(true),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app).delete('/api/widgets/1');
    expect(res.status).toBe(204);
  });

  it('Should return a 404 if delete failed', async () => {
    const mockModel = {
      delete: jest.fn().mockReturnValue(false),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app).delete('/api/widgets/1');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'failed to delete text widget' });
  });

  it('Should return a 404 if no id is provided', async () => {
    const mockModel = {} as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app)
      .delete('/api/widgets/')
      .send({ text: 'Updated text' });
    expect(res.status).toBe(404);
    expect(res.body).toEqual({});
  });
});
