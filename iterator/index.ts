class Student {
  private name: string;

  private sex: number;

  constructor(name: string, sex: number) {
    this.name = name;
    this.sex = sex;
  }

  public getName(): string {
    return this.name;
  }

  public getSex(): number {
    return this.sex;
  }
}

class StudentList {
  protected students: Student[] = [];

  private last: number = 0;

  constructor() {}

  public add(student: Student): void {
    this.students[this.last] = student;
    this.last++;
  }

  public getStudentAt(index: number): Student {
    return this.students[index];
  }

  public getLastNum(): number {
    return this.last;
  }
}

class NewStudentList {
  protected students: Student[] = [];

  public add(student: Student) {
    this.students.push(student);
  }

  public getStudentAd(index: number) {
    return this.students[index];
  }
}

abstract class Teacher {
  protected abstract studentList: StudentList | NewStudentList;

  public abstract createStudentList(): void;

  public abstract callStudents(): void;
}

class MyTeacher extends Teacher {
  protected studentList: StudentList = new StudentList();
  private students: Array<[string, number]> = [
    ["佐藤", 20],
    ["伊藤", 20],
    ["武藤", 20],
    ["加藤", 20],
    ["尾藤", 20],
  ];

  public createStudentList(): void {
    this.students.forEach((value: [string, number]) => {
      this.studentList.add(new Student(value[0], value[1]));
    });
  }

  public callStudents(): void {
    this.students.forEach((value, index) => {
      console.log(this.studentList.getStudentAt(index));
    });
  }
}

// export default function main() {
//   console.log("Iterator Pattern");

//   const teacher = new MyTeacher();

//   teacher.createStudentList();

//   teacher.callStudents();
// }

interface Iterator {
  hasNext: () => boolean;
  next: () => Object;
}

interface Aggregate {
  iterator: () => Iterator;
}

class MyStudentList extends StudentList implements Aggregate {
  public iterator() {
    return new MyStudentListIterator(this);
  }
}

class MyStudentListIterator implements Iterator {
  private myStudentList: MyStudentList;
  private index: number;

  constructor(list: MyStudentList) {
    this.myStudentList = list;
    this.index = 0;
  }

  public hasNext(): boolean {
    if (this.myStudentList.getLastNum() > this.index) {
      return true;
    }
    return false;
  }

  public next(): Student {
    const student: Student = this.myStudentList.getStudentAt(this.index);
    this.index++;
    return student;
  }
}

class MyNewStudentList extends NewStudentList implements Aggregate {
  public iterator() {
    return new MyNewStudentListIterator(this);
  }
}

class MyNewStudentListIterator implements Iterator {
  private myStudentList: MyNewStudentList;
  private index: number;

  constructor(list: MyNewStudentList) {
    this.myStudentList = list;
    this.index = 0;
  }

  public hasNext(): boolean {
    if (this.myStudentList.getStudentAd(this.index)) {
      return true;
    }
    return false;
  }

  public next(): Student {
    const student: Student = this.myStudentList.getStudentAd(this.index);
    this.index++;
    return student;
  }
}

class SeniorTeacher extends Teacher {
  // protected studentList: MyStudentList = new MyStudentList();
  protected studentList: MyNewStudentList = new MyNewStudentList();

  private students: Array<[string, number]> = [
    ["佐藤", 20],
    ["伊藤", 20],
    ["武藤", 20],
    ["加藤", 20],
    ["尾藤", 20],
  ];

  public createStudentList(): void {
    this.students.forEach((value: [string, number]) => {
      this.studentList.add(new Student(value[0], value[1]));
    });
  }

  public callStudents(): void {
    const itr: Iterator = this.studentList.iterator();

    while (itr.hasNext()) {
      console.log(itr.next());
    }
  }
}

export default function main() {
  console.log("Iterator Pattern");

  const teacher = new SeniorTeacher();

  teacher.createStudentList();

  teacher.callStudents();
}
