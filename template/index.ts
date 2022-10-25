abstract class WoodCutPrint {
  abstract draw(material: string): void;

  abstract cut(material: string): void;

  abstract print(material: string): void;

  createWoodCutPrint(): void {
    const material: string = "wood";

    this.draw(material);

    this.cut(material);

    this.print(material);
  }
}

class TanakaWoodCutPrint extends WoodCutPrint {
  draw(material: string): void {
    console.log(`I draw my country on ${material}`);
  }

  cut(material: string): void {
    console.log(`I sliced following the ${material}'s lines`);
  }

  print(material: string): void {
    console.log(`I print out the ${material}`);
  }
}

export default function main() {
  const tanaka = new TanakaWoodCutPrint();
  tanaka.createWoodCutPrint();
}
