import { Color } from "./Color";
import { Theme } from "./Theme";

export class Star implements Theme {

  getAnimateTag(color: Color): String {
    return `<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"853\" height=\"155\" viewBox=\"0 0 853 155\" xml:space=\"preserve\">
    <g transform=\"matrix(0.12 0.12 -0.12 0.12 89 76)\">
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.7\" type=\"scale\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.8;0.7\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></polygon></g>
    <g transform=\"matrix(0.12 0 0 0.12 183 63)\">
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.7\" type=\"scale\" dur=\"2.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.8;0.7\" type=\"null\" dur=\"2.5s\" repeatCount=\"indefinite\"/></polygon></g>
    <g transform=\"matrix(0.08 -0.12 0.12 0.08 488 30)\">
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.7\" to=\"0.8\" type=\"scale\" dur=\"2.5s\" repeatCount=\"indefinite\"/></polygon></g>
    <g transform=\"matrix(0.12 0 0 0.12 554 61)\">
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.9\" to=\"0.8\" type=\"scale\" dur=\"1.5s\" repeatCount=\"indefinite\"/></polygon></g>
    <g transform=\"matrix(0.15 -0.21 0.21 0.15 730 81)\">
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.7\" type=\"scale\" dur=\"1.2s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.8;0.7\" type=\"null\" dur=\"1.2s\" repeatCount=\"indefinite\"/></polygon></g>
    <g transform=\"matrix(0.03 0.07 -0.07 0.03 769 28)\">
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.8;0.7\" type=\"null\" dur=\"1.8s\" repeatCount=\"indefinite\"/></polygon></g>
    <g transform=\"matrix(0.09 0 0 0.09 300 67)\">
    <polygon style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.8;0.7\" type=\"null\" dur=\"1.2s\" repeatCount=\"indefinite\"/></polygon></g>
    <g transform=\"matrix(0.13 0 0 0.13 53 36)\">
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.18 -0.21 0.21 0.18 57 121)\">
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.02 -0.2 0.2 0.02 318 82)\">
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.12 0 0 0.12 801 60)\">
    <polygon style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.18 0.12 -0.12 0.18 816 135)\">
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.11 0 0 0.11 601 29)\">
    <polygon style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.10 0 0 0.10 420 27)\">
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.12 0 0 0.12 648 102)\">
    <polygon style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.04 0 0 0.04 75 32)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.4\" to=\"0.5\" type=\"scale\" dur=\"2.8s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"2.8s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 92 49)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.7\" to=\"0.6\" type=\"scale\" dur=\"2.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;0.6\" type=\"null\" dur=\"2.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 200 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"1.0\" type=\"scale\" dur=\"3.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"3.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 250 42)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.5\" type=\"scale\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 237 46)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.5\" type=\"scale\" dur=\"1.2s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"1.2s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 167 48)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.5\" type=\"scale\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 135 29)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.5\" type=\"scale\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 172 25)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.7\" to=\"0.8\" type=\"scale\" dur=\"2.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 90 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.5\" type=\"scale\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 50 70)\">
    <circle style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animate fill=\"freeze\" attributeName=\"opacity\" values=\"1.0;0.8\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 147 55)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.5\" type=\"scale\" dur=\"1.2s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"1.2s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 30 75)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.9\" to=\"0.8\" type=\"scale\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.9;0.8\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 637 44)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.4\" to=\"0.6\" type=\"scale\" dur=\"2.0s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;0.8\" type=\"null\" dur=\"2.0s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 527 55)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.4\" to=\"0.7\" type=\"scale\" dur=\"2.3s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"2.3s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 490 50)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"1.0\" type=\"scale\" dur=\"3.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"3.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 442 75)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.4\" to=\"0.5\" type=\"scale\" dur=\"3.2s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;0.8\" type=\"null\" dur=\"3.2s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 151 68)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.5\" type=\"scale\" dur=\"1.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 737 44)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.4\" to=\"0.5\" type=\"scale\" dur=\"2.5s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.7;1.0\" type=\"null\" dur=\"2.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 310 40)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" from=\"0.8\" to=\"0.7\" type=\"scale\" dur=\"1.4s\" repeatCount=\"indefinite\"/><animate fill=\"freeze\" attributeName=\"opacity\" values=\"1.0;0.8\" type=\"null\" dur=\"1.4s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 667 55)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.9;0.7\" type=\"null\" dur=\"1.2s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 367 49)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.8;0.7\" type=\"null\" dur=\"1.5s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 267 49)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"><animate fill=\"freeze\" attributeName=\"opacity\" values=\"0.8;0.7\" type=\"null\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 65 22)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 87 25)\">
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 17 44)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 98 45)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 220 32)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 227 27)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 227 53)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 227 42)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 127 25)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 175 42)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 142 24)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 147 75)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 107 104)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 127 42)\">
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 35 129)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 42 84)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 690 20)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 647 19)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 680 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 690 40)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 627 25)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 657 45)\">
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 527 45)\">
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 537 44)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 527 25)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 520 40)\">
    <circle style=\"fill: ${color.hexCodes[1]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 520 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 457 55)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 467 65)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 427 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 427 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 480 45)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 357 55)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 387 65)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 397 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 420 50)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 220 65)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 300 95)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 300 95)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 280 82)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 657 85)\">
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 667 95)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 627 65)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 690 80)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 570 68)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 580 75)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 580 75)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 813 15)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 827 85)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 787 25)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 782 106)\">
    <circle style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 757 45)\">
    <circle style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 767 55)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 727 25)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 590 40)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 580 35)\">
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 387 35)\">
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 337 55)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 317 44)\">
    <circle style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 337 25)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 330 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 288 35)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 278 30)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 207 88)\">
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    </svg>`
  }

  getTag(color: Color): String {
    return `<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"853\" height=\"155\" viewBox=\"0 0 853 155\" xml:space=\"preserve\">"
    +"<g transform=\"matrix(0.12 0.12 -0.12 0.12 89 76)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.12 0 0 0.12 183 63)\">"
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.08 -0.12 0.12 0.08 488 30)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.12 0 0 0.12 554 61)\">"
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.15 -0.21 0.21 0.15 730 81)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.03 0.07 -0.07 0.03 769 28)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.09 0 0 0.09 300 67)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.13 0 0 0.13 53 36)\">"
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.18 -0.21 0.21 0.18 57 121)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.02 -0.2 0.2 0.02 318 82)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.12 0 0 0.12 801 60)\">"
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.18 0.12 -0.12 0.18 816 135)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.11 0 0 0.11 601 29)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.10 0 0 0.10 420 27)\">"
    <polygon style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.12 0 0 0.12 648 102)\">"
    <polygon style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" points=\"0,-35.47 11.56,-12.17 37.29,-8.4 18.68,9.8 23.06,35.47 0,23.42 -23.06,35.47 -18.74,9.8 -37.29,-8.4 -11.56,-12.17\"></polygon></g>
    <g transform=\"matrix(0.04 0 0 0.04 75 32)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 92 49)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 200 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 250 42)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 237 46)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 167 48)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 135 29)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 172 25)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 90 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 50 70)\">"
    <circle style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 147 55)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 30 75)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 637 44)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 527 55)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 490 50)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 442 75)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 151 68)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.05 0 0 0.05 737 44)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 310 40)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 667 55)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 367 49)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 267 49)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 65 22)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 87 25)\">"
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 17 44)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 98 45)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 220 32)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 227 27)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 227 53)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 227 42)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 127 25)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 175 42)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 142 24)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 147 75)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 107 104)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 127 42)\">"
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 35 129)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 42 84)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 690 20)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 647 19)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 680 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 690 40)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 627 25)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 657 45)\">"
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 527 45)\">"
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 537 44)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 527 25)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 520 40)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 520 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 457 55)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 467 65)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 427 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 427 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 480 45)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 357 55)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 387 65)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 397 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 420 50)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 220 65)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 300 95)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 300 95)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 280 82)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 657 85)\">"
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 667 95)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 627 65)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 690 80)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 570 68)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 580 75)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 580 75)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 813 15)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 827 85)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 787 25)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 782 106)\">"
    <circle style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 757 45)\">"
    <circle style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 767 55)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 727 25)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 590 40)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 580 35)\">"
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 387 35)\">"
    <circle style=\"fill: ${color.hexCodes[4]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.04 0 0 0.04 337 55)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 317 44)\">"
    <circle style=\"fill: ${color.hexCodes[3]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 337 25)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 330 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.02 0 0 0.02 288 35)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 278 30)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    <g transform=\"matrix(0.03 0 0 0.03 207 88)\">"
    <circle style=\"fill: ${color.hexCodes[2]}; opacity: 1;\" cx=\"0\" cy=\"0\" r=\"35\"></circle></g>
    </svg>`
  }
}