import AbstractCarPart from "./abstract-cat-part";
import IVisitor from "./ivisitor";

class CarBody extends AbstractCarPart {}

class Engine extends AbstractCarPart {}

class Wheel extends AbstractCarPart {}

class Car extends AbstractCarPart {
  #parts: AbstractCarPart[];

  constructor(name: string) {
    super(name);

    this.#parts = [
      new CarBody("Utility Body", "ABC-123-21", 1001),
      new Engine("V8 engine", "DEF-456-21", 2555),
      new Wheel("FrontLeft", "GHI-789FL-21", 136),
      new Wheel("FrontRight", "GHI-789FR-21", 136),
      new Wheel("BackLeft", "GHI-7898L-21", 152),
      new Wheel("BackRight", "GHI-7898R-21", 152),
    ];
  }

  accept(visitor: IVisitor) {
    this.#parts.forEach((part: AbstractCarPart) => {
      part.accept(visitor);
    });
    visitor.visit(this);
  }
}

class PrintPartsVisitor implements IVisitor {
  visit(abstractCarPart: AbstractCarPart) {
    if (abstractCarPart.sku != undefined) {
      console.log(
        `${abstractCarPart.name}\t:${abstractCarPart.sku}\t:${abstractCarPart.price}`
      );
    }
  }
}

class TotalPriceVisitor implements IVisitor {
  totalPrice = 0;

  visit(abstractCarPart: AbstractCarPart) {
    if (abstractCarPart.price !== undefined) {
      this.totalPrice += abstractCarPart.price as number;
    }
  }
}

export default function main() {
  const car = new Car("Delorean");

  car.accept(new PrintPartsVisitor());

  const total_price_visitor = new TotalPriceVisitor();

  car.accept(total_price_visitor);

  console.log(`Total Price = ${total_price_visitor.totalPrice}`);
}
