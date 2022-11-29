import GameAPI from "./game-api";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function facadeExample() {
  const gameAPI = new GameAPI();

  const user = { user_name: "sean" };

  const userId = gameAPI.registerUser(user);

  await sleep(500);

  gameAPI.submitEntry(userId, 5);

  await sleep(500);

  console.log();

  console.log("---- GameState Snapshot ----");

  console.log(gameAPI.gameState());

  await sleep(1000);

  const history = gameAPI.getHistory();

  console.log();

  console.log("----Reports History ----");

  Object.keys(history).forEach((key) => {
    console.log(`${key}: ${history[key][0]} : ${history[key][1]}`);
  });

  await sleep(1000);

  console.log();

  console.log("---- User Balance ----");

  console.log(user.user_name + " : " + gameAPI.getBalance(userId));

  await sleep(1000);

  console.log();

  console.log("---- GameState Snapshot ----");

  console.log(gameAPI.gameState());
}
