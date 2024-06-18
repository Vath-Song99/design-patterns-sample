// Command interface
interface Command {
  execute(): void;
}

// Receiver
class Receiver {
  public doSomething(param: string): void {
    console.log(`Receiver: Working on ${param}.`);
  }

  public doSomethingElse(param: string): void {
    console.log(`Receiver: Also working on ${param}.`);
  }
}

// Concrete Command
class ConcreteCommand1 implements Command {
  private receiver: Receiver;
  private param: string;

  constructor(receiver: Receiver, param: string) {
    this.receiver = receiver;
    this.param = param;
  }

  public execute(): void {
    this.receiver.doSomething(this.param);
  }
}

class ConcreteCommand2 implements Command {
  private receiver: Receiver;
  private param: string;

  constructor(receiver: Receiver, param: string) {
    this.receiver = receiver;
    this.param = param;
  }

  public execute(): void {
    this.receiver.doSomethingElse(this.param);
  }
}

// Invoker
class Invoker {
  private commands: Command[] = [];

  public addCommand(command: Command): void {
    this.commands.push(command);
  }

  public executeCommands(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }
}

// Usage
const receiver = new Receiver();
const command1 = new ConcreteCommand1(receiver, "Task 1");
const command2 = new ConcreteCommand2(receiver, "Task 2");

const invoker = new Invoker();
invoker.addCommand(command1);
invoker.addCommand(command2);

invoker.executeCommands();
// Output:
// Receiver: Working on Task 1.
// Receiver: Also working on Task 2.
