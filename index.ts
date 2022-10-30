import Iterator from "./iterator";
import Adaptor from "./adapter";
import Adaptor2 from "./adapter/index2";
import Template from "./template";
import Factory from "./factory";
import Singleton from "./singleton";
import Prototype from "./prototype";

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

  console.info("END");
}
main();
