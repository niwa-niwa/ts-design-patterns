import Iterator from "./iterator";
import Adaptor from "./adapter";
import Adaptor2 from "./adapter/index2";
import Template from "./template";
import Factory from "./factory";
import Singleton from "./singleton";
import Prototype from "./prototype";
import Builder from "./builder";
import AbstractFactory from "./abstract-factory";
import Bridge from "./bridge";
import Strategy from "./strategy";
import FactoryMethod from "./FactoryMethod";
import Composite from "./Composite";
import Decorator from "./Decorator";
import Facade from "./Facade";
import Proxy from "./Proxy";
import CoR from "./CoR";
import Command from "./Command";
import Memento from "./Memento";
import Observer from "./Observer";
import State from "./State";
import TemplateMethod from "./TemplateMethod";

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

  console.log("Proxy Start\n");
  await Proxy();
  console.log("Proxy END\n");

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
