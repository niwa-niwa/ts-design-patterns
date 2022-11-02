abstract class SortImple {
  public abstract sort(value: string): void;
}

class QuickSorter extends SortImple {
  public sort(value: string): void {
    console.log(`QuickSorter ${value}`);
  }
}

class BubbleSorter extends SortImple {
  public sort(value: string): void {
    console.log(`BubbleSorter ${value}`);
  }
}

class Sorter {
  private sorter: SortImple;

  constructor(sorter: SortImple) {
    this.sorter = sorter;
  }

  public sort(value: string) {
    this.sorter.sort(`SortImple ${value}`);
  }
}

class TimerSorter extends Sorter {
  constructor(sorter: SortImple) {
    super(sorter);
  }

  public timerSort(value: string) {
    super.sort(value+" TimerSort");
  }
}

export default function main() {
  const quick_sorter = new QuickSorter();
  quick_sorter.sort("numbers");

  const bubble_sorter = new BubbleSorter();
  bubble_sorter.sort("numbers");

  const timer_sorter = new TimerSorter(quick_sorter);
  timer_sorter.timerSort("timer_sorter");
}
