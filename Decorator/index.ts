interface Component {
  send(): string;
}

class ConcreteComponent implements Component {
  public send(): string {
    return "ConcreteComponent";
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public send(): string {
    return this.component.send();
  }
}

class ConcreteDecoratorA extends Decorator {
  public send(): string {
    return `ConcreteDecoratorA(${super.send()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  public send(): string {
    return `ConcreteDecoratorB(${super.send()})`;
  }
}

function clientCode(component: Component) {
  console.log(`RESULT: ${component.send()}`);
}

export default function main() {
  const simple = new ConcreteComponent();
  console.log("Client: I've got a simple component:");
  clientCode(simple);
  console.log("");

  const decorator1 = new ConcreteDecoratorA(simple);
  const decorator2 = new ConcreteDecoratorB(decorator1);

  console.log("Client: Now I've got a decorated component:");

  clientCode(decorator2);
}
