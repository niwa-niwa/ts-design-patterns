import Value, { IValue } from "./value";
import Add from "./add";
import Sub from "./sub";

export default function main() {
  const a: IValue = Value(1);
  const b: IValue = Value(2);
  const c: IValue = Value(5);

  console.log(Add(a, b).value);
  console.log(Add(a, 100).value);
  console.log(Sub(c, a).value);
  console.log(Sub(Add(c, b), a).value);
  console.log(Sub(100, 101).value);
  console.log(Add(Sub(Add(c, b), a), 100).value);
  console.log(Sub(123, Add(c, c)).value);
  console.log(Add(Sub(Add(c, 10), a), 100).value);
  console.log(a.value);
  console.log(b.value);
  console.log(c.value);
}
