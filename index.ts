import Iterator from "./iterator";
import Adaptor from "./adapter";
import Adaptor2 from "./adapter/index2";
import Template from "./template";
import Factory from "./factory";
import Singleton from "./singleton";
import Prototype from "./prototype";
import Builder from "./builder"
import AbstractFactory from "./abstract-factory"

async function main() {
  console.info("TypeScript Design Patterns!");

  console.log("##### Iterator #####");
  Iterator();

  console.log("##### Adaptor #####");
  Adaptor();
  Adaptor2();

  console.log("##### Template #####");
  Template();

  console.log("##### Factory #####");
  Factory();

  console.log("##### Singleton #####");
  Singleton();

  console.log("##### Prototype #####");
  await Prototype();

  console.log("##### Builder #####")
  Builder()

  console.log("##### Abstract Factory")
  AbstractFactory("deep pot","Sukiyaki")
  AbstractFactory("medium pot","Kimchi")
  AbstractFactory("wide pot","Mizutaki")

  console.info("END");
}
main();
