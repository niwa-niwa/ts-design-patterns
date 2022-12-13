import Circle from "./circle";
import CircleImplementer from "./circle-implementer";
import Square from "./square";
import SquareImplementer from "./square-implementer";

export default function main() {
  const circle = new Circle(new CircleImplementer());

  circle.draw();

  const square = new Square(new SquareImplementer());

  square.draw();
}
