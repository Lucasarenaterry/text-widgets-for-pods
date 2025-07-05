import { AxiosInstance } from 'axios';
import { TextWidgetObject } from '../../interfaces';

export default class TextWidgetDao {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async fetchAllTextWidgets(): Promise<TextWidgetObject[] | { error: string }> {
    try {
      const response = await this.axios.get<TextWidgetObject[]>('/api/widgets');
      return response.data;
    } catch (error) {
      return {
        error: 'Failed to fetch text widgets',
      };
    }
  }

  async createTextWidget(): Promise<TextWidgetObject | { error: string }> {
    try {
      const response = await this.axios.post<TextWidgetObject>('/api/widgets');
      return response.data;
    } catch (error) {
      return {
        error: 'Failed to create text widget',
      };
    }
  }

  async updateTextWidget(
    widget: TextWidgetObject
  ): Promise<TextWidgetObject | { error: string }> {
    try {
      const response = await this.axios.put<TextWidgetObject>(
        `/api/widgets/${widget.id}`,
        widget
      );
      return response.data;
    } catch (error) {
      return {
        error: 'Failed to update text widget',
      };
    }
  }

  async deleteTextWidget(id: string): Promise<boolean> {
    try {
      await this.axios.delete(`/api/widgets/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}
