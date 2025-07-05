import request from 'supertest';
import { createTestingApp } from '../utils';
import { TextWidgetModel } from 'apps/api/src/models/text_widget';

describe('Controller: PUT_UpdateTextWidget', () => {
  it('Should return a 200 with the updated text widget', async () => {
    const mockModel = {
      update: jest.fn().mockReturnValue({ id: '1', text: 'Updated text' }),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app)
      .put('/api/widgets/1')
      .send({ text: 'Updated text' });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', text: 'Updated text' });
  });

  it('Should return a 400 if no text is provided', async () => {
    const mockModel = {} as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app).put('/api/widgets/1').send({});
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Text widget ID and text are required' });
  });

  it('Should return a 404 if no id is provided', async () => {
    const mockModel = {} as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app)
      .put('/api/widgets/')
      .send({ text: 'Updated text' });
    expect(res.status).toBe(404);
    expect(res.body).toEqual({});
  });

  it('Should return a 404 if update failed', async () => {
    const mockModel = {
      update: jest.fn().mockReturnValue(null),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app)
      .put('/api/widgets/1')
      .send({ text: 'Updated text' });
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Failed to update text widget' });
  });
});
