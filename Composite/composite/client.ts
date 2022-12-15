import Folder from "./folder";
import File from "./file";

export default function main() {
  const fileSystem = new Folder("root");

  const file_1 = new File("abc.txt");

  const file_2 = new File("123.txt");

  fileSystem.attach(file_1);

  fileSystem.attach(file_2);

  const folder_a = new Folder("folder_a");

  fileSystem.attach(folder_a);

  const file_3 = new File("xyz.txt");

  folder_a.attach(file_3);

  const folder_b = new Folder("folder_b");

  const file_4 = new File("456.txt");

  folder_b.attach(file_4);

  fileSystem.attach(folder_b);

  fileSystem.dir("");

  console.log();

  folder_b.attach(folder_a);

  fileSystem.dir("");

  console.log();

  folder_a.detach()

  fileSystem.dir("")

  console.log();

  folder_a.delete(file_3)

  fileSystem.dir("")

}
