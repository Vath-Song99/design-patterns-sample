interface Target {
  request(): string;
}

class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log(adapter.request()); // Output: Adapter: (TRANSLATED) Special behavior of the Adaptee.
