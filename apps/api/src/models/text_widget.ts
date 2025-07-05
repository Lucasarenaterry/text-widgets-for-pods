import { TextWidgetObject } from '../controllers/text_widget';

export class textWidgetModel {
  public widgets: TextWidgetObject[] = [];

  constructor(data: TextWidgetObject[] = []) {
    this.widgets = data;
  }

  public fetchAll(): TextWidgetObject[] {
    return this.widgets;
  }

  public create(): TextWidgetObject {
    const widget: TextWidgetObject = {
      id: crypto.randomUUID(),
      text: '',
    };
    this.widgets.push(widget);
    return widget;
  }

  public update(id: string, text: string): TextWidgetObject | null {
    const index = this.widgets.findIndex((w) => w.id === id);
    if (index === -1) {
      return null;
    }

    this.widgets[index] = { id: this.widgets[index]!.id, text };
    return this.widgets[index];
  }

  public delete(id: string): boolean {
    const index = this.widgets.findIndex((w) => w.id === id);
    if (index === -1) {
      return false;
    }
    this.widgets.splice(index, 1);
    return true;
  }
}
