import { AxiosInstance } from 'axios';
import { TextWidgetObject } from '../../interfaces';

export default class TextWidgetDao {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async fetchAllTextWidgets(): Promise<TextWidgetObject[]> {
    try {
      const response = await this.axios.get<TextWidgetObject[]>('/api/widgets');
      return response.data;
    } catch (error) {
      console.error('Error fetching text widgets:', error);
      throw error;
    }
  }

  async createTextWidget(widget: TextWidgetObject): Promise<TextWidgetObject> {
    try {
      const response = await this.axios.post<TextWidgetObject>(
        '/api/widgets',
        widget
      );
      return response.data;
    } catch (error) {
      console.error('Error creating text widget:', error);
      throw error;
    }
  }

  async updateTextWidget(widget: TextWidgetObject): Promise<TextWidgetObject> {
    try {
      const response = await this.axios.put<TextWidgetObject>(
        `/api/widgets/${widget.id}`,
        widget
      );
      return response.data;
    } catch (error) {
      console.error('Error updating text widget:', error);
      throw error;
    }
  }

  async deleteTextWidget(id: string): Promise<void> {
    try {
      await this.axios.delete(`/api/widgets/${id}`);
    } catch (error) {
      console.error('Error deleting text widget:', error);
      throw error;
    }
  }
}
