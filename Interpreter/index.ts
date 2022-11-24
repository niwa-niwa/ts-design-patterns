interface IAbstractExpression {
  interpret(): number;
}

class Numeral implements IAbstractExpression {
  value: number;

  constructor(value: string) {
    this.value = parseInt(value);
  }

  interpret(): number {
    return this.value;
  }
}

class Add implements IAbstractExpression {
  left: IAbstractExpression;
  right: IAbstractExpression;

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class Subtract implements IAbstractExpression {
  left: IAbstractExpression;
  right: IAbstractExpression;

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

export default function main() {
  const SENTENCE = "5 + 4 - 3 + 7 - 1";

  console.log("SEMTEMCE = ", SENTENCE);

  const TOKENS = SENTENCE.split(" ");

  console.log("TOKENS = ", JSON.stringify(TOKENS));

  const AST: IAbstractExpression[] = [];

  AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2])));

  AST.push(new Subtract(AST[0], new Numeral(TOKENS[4])));

  AST.push(new Add(AST[1], new Numeral(TOKENS[6])));

  AST.push(new Subtract(AST[2], new Numeral(TOKENS[8])));

  const AST_ROOT = AST.pop();

  console.log("AST_ROOT = ",(AST_ROOT as IAbstractExpression).interpret());

  console.dir(AST_ROOT, { depth: null });
}
