import Folder from "./folder";
import IComponent from "./icomponent";

export default class File implements IComponent {
  name: string;

  referenceToParent?: Folder = undefined;

  constructor(name: string) {
    this.name = name;
  }

  dir(indent: string): void {
    console.log(`${indent}<File> ${this.name}`);
  }

  detach(): void {
    "Detaching this leaf from its parent composite";
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
    }
  }
}
