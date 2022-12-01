import ChairFactory from "./chair-factory";

export default function main() {
  const smallChair = ChairFactory.getChair("SmallChair");

  const mediumChair = ChairFactory.getChair("MediumChair");

  const bigChair = ChairFactory.getChair("BigChair");

  console.log("smallChair", smallChair.getDimensions());

  console.log("mediumChair", mediumChair.getDimensions());

  console.log("bigChair", bigChair.getDimensions());
}
