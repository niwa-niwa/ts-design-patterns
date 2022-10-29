export class Singleton {
  private static instance: Singleton;

  private constructor(public message: string) {}

  public static getInstance(message: string) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(message);
    }
    return Singleton.instance;
  }

  someMethod() {
    console.log(this.message);
  }
}

export default function main() {
  const si_1 = Singleton.getInstance("sin_1");
  const si_2 = Singleton.getInstance("sin_2");

  si_1.someMethod();
  si_2.someMethod();
}
