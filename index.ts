import Iterator from "./iterator";
import Adaptor from "./adapter";
import Adaptor2 from "./adapter/index2";
import Template from "./template";
import Factory from "./factory"

console.info("TypeScript Design Patterns!");

console.log("##### Iterator #####");
Iterator();

console.log("##### Adaptor #####");
Adaptor();
Adaptor2();

console.log("##### Template #####");
Template();

console.log("##### Factory #####")
Factory();

console.info("END");
