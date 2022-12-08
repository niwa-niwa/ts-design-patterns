import CareTaker from "./caretaker";
import GameCharacter from "./game-character";

export default function main() {
  const game_character = new GameCharacter();

  const careTaker = new CareTaker(game_character);

  game_character.registerKill();

  game_character.moveForward(1);

  game_character.addInventory("sword");

  game_character.registerKill();

  game_character.addInventory("rifle");

  game_character.moveForward(1);

  console.log(game_character.status());

  careTaker.save();

  game_character.registerKill();

  game_character.moveForward(1);

  game_character.progressToNextLevel();

  game_character.registerKill();

  game_character.addInventory("motorbike");

  game_character.moveForward(10);

  game_character.registerKill();

  console.log(game_character.status());

  careTaker.save();

  game_character.moveForward(1);

  game_character.progressToNextLevel();

  game_character.registerKill();

  console.log(game_character.status());

  careTaker.restore(1);

  console.log(game_character.status());

  game_character.registerKill();
}
