const sleep = (second: number) =>
  new Promise((resolve) => setTimeout(resolve, second * 1000));

interface Subject {
  request(): Promise<string>;
}

class RealSubject implements Subject {
  public async request(): Promise<string> {
    await sleep(3);

    return "RealSubject: Handling request.";
  }
}

class MyProxy implements Subject {
  private realSubject: RealSubject;

  private result: string = "";

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public async request(): Promise<string> {
    console.log("proxy method");

    if (this.result === "") {
      this.result = await this.realSubject.request();

      this.logAccess("no cache");
    }else{
      this.logAccess("using cache");
    }

    return this.result;
  }

  private checkAccess(): boolean {
    console.log("Proxy: Checking access prior to firing areal request.");

    return true;
  }

  private logAccess(message: string): void {
    console.log(`Proxy: Logging the time of request with ${message}`);
  }
}

async function clientCode(Subject: Subject) {
  const message = await Subject.request();

  console.log(message);
}

export default async function main() {
  console.log("Client: Executing the client code with a real subject:");

  const realSubject = new RealSubject();

  await clientCode(realSubject);

  console.log("");

  console.log("Client: Executing the same client code with a proxy:");

  const proxy = new MyProxy(realSubject);

  await clientCode(proxy);

  console.log("");

  console.log("Client: use proxy ");

  await clientCode(proxy);
}
