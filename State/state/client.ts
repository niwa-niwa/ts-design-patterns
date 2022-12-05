enum ExampleState {
  initializing = "InitialiZing",
  started = "Started",
  running = "Running",
  finished = "finished",
}

interface IExampleState {
  request(): void;
}

class StateContext implements IExampleState {
  #state: ExampleState;

  constructor() {
    this.#state = ExampleState.initializing;
  }

  public get state() {
    return this.#state;
  }

  public set state(value: ExampleState) {
    switch (value) {
      case ExampleState.started:
        this.request = Started.prototype.request;
        break;
      case ExampleState.running:
        this.request = Running.prototype.request;
        break;
      case ExampleState.finished:
        this.request = Finished.prototype.request;
        break;
    }

    this.#state = value;
  }

  request() {}
}

class Started implements IExampleState {
  request(): void {
    console.log(`I am now Started`);
  }
}

class Running implements IExampleState {
  request() {
    console.log(`I am now Running`);
  }
}

class Finished implements IExampleState {
  request(): void {
    console.log(`I am now Finished`);
  }
}

export default function main() {
  const state_context = new StateContext();

  console.log("State_context = " + state_context.state);

  state_context.state = ExampleState.started;

  state_context.request();

  state_context.state = ExampleState.running;

  state_context.request();

  state_context.state = ExampleState.finished;

  state_context.request();

  state_context.state = ExampleState.started;

  state_context.request();

  state_context.state = ExampleState.running;

  state_context.request();

  state_context.state = ExampleState.finished;

  state_context.request();
}
