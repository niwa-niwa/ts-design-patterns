
export class Taro{
  public enjoyWithAllClassmate():void{
    console.log("みんなで楽しむ")
  }
}

export interface Chairperson{
  organizeClass:()=>void
}

class Teacher{
  public static main(args?:string[]):void{
    const chairperson: Chairperson = new NewTaro();
    chairperson.organizeClass();
  }
}

class NewTaro extends Taro implements Chairperson{
  public organizeClass(){
    super.enjoyWithAllClassmate()
  }
}

export default function main(){

  Teacher.main()
}