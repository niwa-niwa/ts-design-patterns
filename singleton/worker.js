// Tt is test for singleton with worker-threads

const sleep = ()=>{return new Promise((resolve) => setTimeout(resolve, 3000))};

class Singleton {
  static instance;

  constructor(message) {
    this.message = message;
  }

  static getInstance(message) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(message);
    }
    return Singleton.instance;
  }

  sendMessage() {
    console.log("from Singleton ", this.message);
  }
}

const { workerData } = require("worker_threads");

async function main() {
  console.log("start worker!", workerData);

  const singleton = Singleton.getInstance(workerData+"-message");

  console.log(workerData, singleton.message)

  await sleep();

  const singleton2 = Singleton.getInstance("hello");

  console.log(workerData, singleton2.message)

  singleton.sendMessage();

  await sleep();

  singleton2.sendMessage();

  console.log("end worker", workerData);
}

main();
