import axios, { AxiosInstance } from 'axios';
import TextWidgetDao from './daos/text_widget';

export default class ApiClient {
  private client: AxiosInstance;

  public textWidgetDao: TextWidgetDao;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });

    this.textWidgetDao = new TextWidgetDao(this.client);
  }
}
