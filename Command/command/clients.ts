import Light from "./light";
import Switch from "./switch";
import SwitchOffCommand from "./switch-off-command";
import SwitchOnCommand from "./switch-on-command";

export default function main() {
  const light = new Light();

  const switchOn = new SwitchOnCommand(light);

  const switchOff = new SwitchOffCommand(light);

  const a_switch = new Switch();

  a_switch.register("ON", switchOn);

  a_switch.register("OFF", switchOff);

  a_switch.execute("ON");

  a_switch.execute("OFF");

  a_switch.execute("ON");

  a_switch.execute("OFF");

  a_switch.showHistory();

  a_switch.replayLast(2);
}
