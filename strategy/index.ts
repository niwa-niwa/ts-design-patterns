type Comparator = (num1: number, num2: number) => number;

const aCompare: Comparator = (num1: number, num2: number) => {
  return num1 > num2 ? num1 : num2;
};

const bCompare: Comparator = (num1: number, num2: number) => {
  num1 = num1 * 2;
  return num1 > num2 ? num1 : num2;
};

class Reader {
  constructor(private num1: number, private num2: number) {}
  public compare(callable: Comparator) {
    console.log(callable(this.num1, this.num2));
  }
}

export default function main() {
  const easy_reader = new Reader(1, 2);
  easy_reader.compare(aCompare);

  const hard_reader = new Reader(2, 3);
  hard_reader.compare(bCompare);
}
