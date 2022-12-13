import Iterator from "./iterator";
import Adaptor from "./adapter";
import Adaptor2 from "./adapter/index2";
import Adaptor3 from "./adapter/adapter/clients";
import Template from "./template";
import Factory from "./factory";
import Singleton from "./singleton";
import Prototype from "./prototype";
import Builder from "./builder";
import Builder2 from "./builder/builder/client";
import AbstractFactory, { secondAbstractFactory } from "./abstract-factory";
import Bridge from "./bridge";
import Bridge2 from "./bridge/Bridge/client";
import Strategy from "./strategy";
import Strategy2 from "./strategy/strategy/client";
import FactoryMethod from "./FactoryMethod";
import factory2 from "./FactoryMethod/factory/client";
import Composite from "./Composite";
import Decorator from "./Decorator";
import Decorator2 from "./Decorator/decorator/client";
import Facade from "./Facade";
import Facade2 from "./Facade/facade/client";
import Proxy from "./Proxy";
import Proxy2 from "./Proxy/proxy/client";
import CoR from "./CoR";
import Command from "./Command";
import Command2 from "./Command/command/clients";
import Memento from "./Memento";
import Memento2 from "./Memento/memento/client";
import Observer from "./Observer";
import Observer2 from "./Observer/observer/client";
import State from "./State";
import State2 from "./State/state/client";
import TemplateMethod from "./TemplateMethod";
import Visitor from "./Visitor";
import Interpreter from "./Interpreter";
import Mediator2 from "./Mediator/client";
import Mediator from "./Mediator/";

async function main() {
  console.info("TypeScript Design Patterns!");

  console.log("");

  console.info("Factory Method Start\n");
  FactoryMethod();
  console.log("Factory Method End\n");

  console.log("");

  console.log("Composite Start\n");
  Composite();
  console.log("Composite End\n");

  console.log("");

  console.log("Decorator Start\n");
  Decorator();
  console.log("Decorator END\n");

  console.log("");

  console.log("Facade Start\n");
  Facade();
  console.log("Facade END\n");

  console.log("");

  // console.log("Proxy Start\n");
  // await Proxy();
  // console.log("Proxy END\n");

  console.log("");

  console.log("\nCoR Start\n");
  CoR();
  console.log("\nCoR END\n");

  console.log("\nCommand Start\n");
  Command();
  console.log("\nCommand END\n");

  console.log("\nMemento Start\n");
  Memento();
  console.log("\nMemento END\n");

  console.log("\nObserver Start\n");
  Observer();
  console.log("\nObserver END\n");

  console.log("\nState Start\n");
  State();
  console.log("\nState END\n");

  console.log("\nTemplateMethod Start\n");
  TemplateMethod();
  console.log("\nTemplateMethod END\n");

  console.log("\nVisitor Start\n");
  Visitor();
  console.log("\nVisitor END\n");

  console.log("\nsecondAbstractFactory Start\n");
  secondAbstractFactory();
  console.log("\nsecondAbstractFactory END\n");

  console.log("\nInterpreter Start\n");
  Interpreter();
  console.log("\nInterpreter END\n");

  console.log("\nBuilder2 Start\n");
  Builder2();
  console.log("\nBuilder2 END\n");

  console.log("\nAdaptor3 Start\n");
  await Adaptor3;
  console.log("\nAdaptor3 END\n");

  console.log("\nStrategy2 Start\n");
  Strategy2();
  console.log("\nStrategy2 END\n");

  console.log("\nDecorator2 Start\n");
  Decorator2();
  console.log("\nDecorator2 END\n");

  console.log("\nFacade2 Start\n");
  await Facade2();
  console.log("\nFacade2 END\n");

  console.log("\nMediator Start\n");
  Mediator();
  console.log("\nMediator END\n");

  console.log("\nfactory2 Start\n");
  factory2();
  console.log("\nfactory2 END\n");

  console.log("\nObserver2 Start\n");
  Observer2();
  console.log("\nObserver2 END\n");

  console.log("\nProxy2 Start\n");
  Proxy2();
  console.log("\nProxy2 END\n");

  console.log("\nState2 Start\n");
  State2();
  console.log("\nState2 END\n");

  console.log("\nMemento2 Start\n");
  Memento2();
  console.log("\nMemento2 END\n");

  console.log("\nBridge2 Start\n");
  Bridge2();
  console.log("\nBridge2 END\n");

  // console.log("##### Iterator #####");
  // Iterator();

  // console.log("##### Adaptor #####");
  // Adaptor();
  // Adaptor2();

  // console.log("##### Template #####");
  // Template();

  // console.log("##### Factory #####");
  // Factory();

  // console.log("##### Singleton #####");
  // Singleton();

  // console.log("##### Prototype #####");
  // await Prototype();

  // console.log("##### Builder #####")
  // Builder()

  // console.log("##### Abstract Factory")
  // AbstractFactory("deep pot","Sukiyaki")
  // AbstractFactory("medium pot","Kimchi")
  // AbstractFactory("wide pot","Mizutaki")

  // console.log("##### Brigge #####")
  // Bridge();

  // console.log("##### Strategy #####")
  // Strategy();

  console.info("END\n");
}
main();
