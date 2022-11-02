abstract class Factory {
  public abstract getSoup(): string;
  public abstract getMain(): string;
  public abstract getVegetables(): string[];
  public abstract getOtherIngredients(): string[];
}

class KimchiFactory extends Factory {
  public getSoup() {
    return "Miso";
  }
  public getMain() {
    return "Kimchi";
  }
  public getVegetables() {
    return ["pork", "egg"];
  }
  public getOtherIngredients() {
    return ["salt"];
  }
}

class SukiyakiFactory extends Factory {
  public getSoup() {
    return "Soy source";
  }
  public getMain() {
    return "beef";
  }
  public getVegetables() {
    return ["Hesitant", "long onion"];
  }
  public getOtherIngredients() {
    return ["salt", "sugar"];
  }
}

class MizutakiFactory extends Factory {
  public getSoup() {
    return "dried Sea weed";
  }
  public getMain() {
    return "chicken";
  }
  public getVegetables() {
    return ["onion"];
  }
  public getOtherIngredients() {
    return ["paper"];
  }
}

class HotPot {
  private pot: string = "";
  private soup: string = "";
  private protein: string = "";
  private vegetables: string[] = [];
  private otherIngredients: string[] = [];

  constructor(pot: string) {
    this.pot = pot;
  }

  public addSoup(soup: string) {
    this.soup = soup;
  }

  public addMain(protein: string) {
    this.protein = protein;
  }

  public addVegetables(vegetables: string[]) {
    this.vegetables = vegetables;
  }

  public addOtherIngredients(otherIngredients: string[]) {
    this.otherIngredients = otherIngredients;
  }

  public cook() {
    return {
      pot: this.pot,
      soup: this.soup,
      protein: this.protein,
      vegetables: this.vegetables,
      otherIngredients: this.otherIngredients,
    };
  }
}

function createFactory(str: string) {
  if (str === "Kimchi") {
    return new KimchiFactory();
  }

  if (str === "Sukiyaki") {
    return new SukiyakiFactory();
  }

  return new MizutakiFactory();
}

export default function main(pot: string, type: string) {
  const hotpot: HotPot = new HotPot(pot);

  const factory: Factory = createFactory(type);

  hotpot.addSoup(factory.getSoup());

  hotpot.addMain(factory.getMain());

  hotpot.addVegetables(factory.getVegetables());

  hotpot.addOtherIngredients(factory.getOtherIngredients());

  console.log(hotpot.cook());
}
