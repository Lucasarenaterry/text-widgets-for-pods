import request from 'supertest';
import { createTestingApp } from '../utils';
import { TextWidgetModel } from 'apps/api/src/models/text_widget';

describe('Controller: GET_AllTextWidgets', () => {
  it('Should return a 200 with an array of text widgets', async () => {
    const mockModel = {
      fetchAll: jest.fn().mockReturnValue([
        { id: '1', text: 'Widget 1' },
        { id: '2', text: 'Widget 2' },
      ]),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app).get('/api/widgets');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { id: '1', text: 'Widget 1' },
      { id: '2', text: 'Widget 2' },
    ]);
  });

  it('Should return an empty array if no widgets exist', async () => {
    const mockModel = {
      fetchAll: jest.fn().mockReturnValue([]),
    } as unknown as TextWidgetModel;

    const app = createTestingApp(mockModel);
    const res = await request(app).get('/api/widgets');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });
});
