import request from 'supertest';
import { createTestingApp } from '../utils';
import { TextWidgetModel } from 'apps/api/src/models/text_widget';

describe('Controller: POST_CreateTextWidget', () => {
  it('Should return a 201 with the created text widget', async () => {
    const mockModel = {
      create: jest.fn().mockReturnValue({ id: '1', text: '' }),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app).post('/api/widgets');
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: '1', text: '' });
  });

  it('Should return a 400 if failed to create text widget', async () => {
    const mockModel = {
      create: jest.fn().mockReturnValue(null),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app).post('/api/widgets');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Failed to create text widget' });
  });

  it('Should return a 404 if create failed', async () => {
    const mockModel = {
      create: jest.fn().mockReturnValue(null),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app).post('/api/widgets');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Failed to create text widget' });
  });
});
