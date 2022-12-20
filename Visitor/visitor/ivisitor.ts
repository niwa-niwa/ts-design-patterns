import AbstractCarPart from "./abstract-cat-part";

export default interface IVisitor {
  visit(abstractCarPart: AbstractCarPart): void;
}
