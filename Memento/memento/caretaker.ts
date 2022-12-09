import GameCharacter from "./game-character";
import Memento, { IMementoChild } from "./memento";

export default class CareTaker {
  #originator: IMementoChild;
  #mementos: Memento[];

  constructor(originator: IMementoChild) {
    this.#originator = originator;
    this.#mementos = [];
  }

  save(): void {
    console.log("CareTaker: Game Save");
    const memento = this.#originator.memento;
    this.#mementos.push(memento);
  }

  restore(index: number): void {
    console.log("CareTaker: Restoring Characters attributes from Memento");
    const memento = this.#mementos[index];
    this.#originator.memento = memento;
  }
}
