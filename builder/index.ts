interface Builder {
  addSolute(soluteAmount: number): void;
  addSolvent(solventAmount: number): void;
  abandonSolution(solutionAmount: number): void;
  getResult(): Object;
}

class Director {
  constructor(private builder: Builder) {}

  public construct(): void {
    this.builder.addSolvent(100);

    this.builder.addSolute(40);

    this.builder.abandonSolution(70);

    this.builder.addSolvent(100);

    this.builder.addSolute(15);
  }
}

class SaltWater {
  constructor(public salt: number, public water: number) {}
}

class SaltWaterBuilder implements Builder {
  private saltWater: SaltWater;

  constructor(salt: number, water: number) {
    this.saltWater = new SaltWater(salt, water);
  }

  public addSolute(saltAmount: number): void {
    this.saltWater.salt += saltAmount;
  }

  public addSolvent(waterAmount: number): void {
    this.saltWater.water += waterAmount;
  }

  public abandonSolution(solutionAmount: number): void {
    const saltDelta: number =
      solutionAmount *
      (this.saltWater.salt / (this.saltWater.salt + this.saltWater.water));

    const waterDelta: number =
      solutionAmount *
      (this.saltWater.water / (this.saltWater.salt + this.saltWater.water));

    this.saltWater.salt -= saltDelta;

    this.saltWater.water -= waterDelta;
  }

  public getResult(): Object {
    return this.saltWater;
  }
}

class SugarWater {
  constructor(public sugar: number, public water: number) {}
}

export default function main() {
  const builder = new SaltWaterBuilder(100, 40);

  const dir: Director = new Director(builder);

  dir.construct();

  const saltWater: SaltWater = builder.getResult() as SaltWater;

  console.log(saltWater);
}
