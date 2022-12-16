import IAbstractExpression from "./iabstract-expression";
import Parser from "./sentence-parser";

export default function main() {
  const sentence = "5 + IV - 3 + VII - 2";
  // const sentence = "4 + II + XII + 1 + 2"
  // const sentence = "5 + 4 - 3 + 7 - 2"
  // const sentence = "V + IV - III + 7 - II"
  // const sentence= "CIX + V"
  // const sentence = "CIX + V - 3 + VII - 2"
  // const sentence = "MMMCMXCIX - CXIX + MCXXII - MMMCDXII - XVIII - CCXXXV"
  console.log(sentence);

  const ast_root = Parser.parse(sentence);

  console.log((ast_root as IAbstractExpression).interpret());

  console.dir(ast_root, { depth: null });
}
