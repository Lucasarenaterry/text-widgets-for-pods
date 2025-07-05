import { TextWidgetModel } from '../../src/models/text_widget';
import { TextWidgetObject } from '../../src/controllers/text_widget';

describe('TextWidgetModel', () => {
  let mockModel: TextWidgetModel;
  let mockData: TextWidgetObject[];

  beforeEach(() => {
    mockData = [{ id: '1', text: 'Sample text 1' }];
    mockModel = new TextWidgetModel(mockData);
  });

  describe('constructor', () => {
    it('should initialize with empty data if no data is provided', () => {
      const model = new TextWidgetModel();
      expect(model.widgets).toEqual([]);
    });

    it('should initialize with provided data', () => {
      const model = new TextWidgetModel(mockData);
      expect(model.widgets).toEqual(mockData);
    });
  });

  describe('fetchAll', () => {
    it('should return all text widgets', () => {
      const widgets = mockModel.fetchAll();
      expect(widgets).toEqual(mockData);
    });
  });

  describe('create', () => {
    it('should create a new text widget with a unique ID', () => {
      const newWidget = mockModel.create();
      expect(newWidget).toHaveProperty('id');
      expect(newWidget).toHaveProperty('text', '');
      expect(mockModel.widgets).toContainEqual(newWidget);
    });
  });

  describe('update', () => {
    it('should update an existing text widget by ID', () => {
      const updatedWidget = mockModel.update('1', 'Updated text');
      expect(updatedWidget).toEqual({ id: '1', text: 'Updated text' });
      expect(mockModel.widgets).toContainEqual(updatedWidget);
    });

    it('should return null if the widget does not exist', () => {
      const updatedWidget = mockModel.update('non-existent-id', 'New text');
      expect(updatedWidget).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete an existing text widget by ID', () => {
      const result = mockModel.delete('1');
      expect(result).toBe(true);
      expect(mockModel.widgets).not.toContainEqual({
        id: '1',
        text: 'Sample text 1',
      });
    });

    it('should return false if the widget does not exist', () => {
      const result = mockModel.delete('non-existent-id');
      expect(result).toBe(false);
      expect(mockModel.widgets).toEqual(mockData);
    });
  });
});
