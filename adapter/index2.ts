import { Taro, Chairperson } from ".";

class Hanako implements Chairperson {
  protected taro: Taro = new Taro();

  public organizeClass() {
    this.taro.enjoyWithAllClassmate();
  }
}

class Teacher {
  public static main(args?: string[]): void {
    const chairperson: Chairperson = new Hanako();
    chairperson.organizeClass();
  }
}

export default function main() {
  Teacher.main();
}
