export class Color {
  readonly name: string;
  readonly hexCodes: string[];

  constructor(name: string, hexCodes: string[]) {
    this.name = name;
    this.hexCodes = hexCodes;
  }

  static readonly BLUE = new Color('blue', ['#eeeeee', '#bbdefb', '#64b5f6', '#1e88e5', '#0d47a1']);
  static readonly RED = new Color('red', ['#d09c9c', '#bf7272', '#a72b2b', '#761212', '#440909']);
  static readonly GOLD = new Color('gold', ['#fffdb8', '#fdf68c', '#f4cd2a', '#eda323', '#d28d0d']);
  static readonly PINK = new Color('cherry', ['#ffe7fc', '#ffd6d6', '#ffafc3', '#ffa5a5', '#ff7fac']);

  static getColorByName(name: string): Color {
    switch (name.toLowerCase()) {
      case 'blue':
        return Color.BLUE;
      case 'red':
        return Color.RED;
      case 'gold':
        return Color.GOLD;
      case 'pink':
        return Color.PINK;
      default:
        return Color.BLUE;
    }
  }
}