import { Color } from "./Color";

export interface Theme {
  getTag(color: Color): String
}