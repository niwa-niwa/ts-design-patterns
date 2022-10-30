const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};

interface Cloneable {
  createClone(): Cloneable;
}

class Paper implements Cloneable {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public createClone(): Cloneable {
    const new_paper: Paper = new Paper(this.name);

    new_paper.name = this.name;

    return new_paper;
  }
}

export async function main() {
  async function _drawCrystal(paper: Paper) {
    await sleep();
    paper.name += " drawn";
    console.log("drawn crystal");
  }

  async function _cutAccordanceWithLine(paper: Paper) {
    await sleep();
    paper.name += " cut";
    console.log("cut paper");
  }

  const p_type: Paper = new Paper("diamond");

  await _drawCrystal(p_type);

  await _cutAccordanceWithLine(p_type);

  const papers: Paper[] = [];

  for (let i = 0; i < 5; i++) {
    papers[i] = p_type.createClone() as Paper;
  }

  const p_type2: Paper = new Paper("crystal");
  
  await _drawCrystal(p_type2);

  await _cutAccordanceWithLine(p_type2);

  for (let i = papers.length; i < 10; i++) {
    papers[i] = p_type2.createClone() as Paper;
  }

  console.log(papers);
}

export default main;
