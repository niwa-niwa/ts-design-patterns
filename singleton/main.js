const { Worker } = require("worker_threads");

// worker 1
const worker = new Worker(__dirname + "/worker.js", { workerData: "worker1" });

// worker 2
const worker2 = new Worker(__dirname + "/worker.js", {
  workerData: "worker2",
});
