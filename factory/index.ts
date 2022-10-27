
type Cuttable = "paper" | "wood" | "potato";

abstract class CutPrint {
  protected abstract draw(hanzai: Cuttable): void;

  protected abstract cut(hanzai: Cuttable): void;

  protected abstract print(hanzai: Cuttable): void;

  protected createCuttable(type: Cuttable): Cuttable {
    return type;
  }

  public createCutPrint(material: Cuttable): void {
    const hanzai = this.createCuttable(material);

    this.draw(hanzai);

    this.cut(hanzai);

    this.print(hanzai);
  }
}

class StudentA extends CutPrint{
  protected draw(hanzai: Cuttable): void {
    console.log(`draw a image of anime on ${hanzai}`)
  }
  protected cut(hanzai: Cuttable): void {
    console.log(`cut along the image's line on ${hanzai}`)
  }
  protected print(hanzai: Cuttable): void {
    console.log(`print the image on ${hanzai}`)
  }
  
}

export default function  main(){
  const student_a = new StudentA()
  student_a.createCutPrint("potato")
  student_a.createCutPrint("paper")
}