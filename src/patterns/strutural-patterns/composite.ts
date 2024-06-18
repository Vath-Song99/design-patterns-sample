// Component interface
interface Component {
  operation(): string;
}

// Leaf implementing the Component interface
class Leaf implements Component {
  public operation(): string {
    return "Leaf";
  }
}

// Composite implementing the Component interface
class Composite implements Component {
  private children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    if (componentIndex !== -1) {
      this.children.splice(componentIndex, 1);
    }
  }

  public operation(): string {
    const results: string[] = [];
    for (const child of this.children) {
      results.push(child.operation());
    }
    return `Branch(${results.join("+")})`;
  }
}

// Usage
const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();

composite.add(leaf1);
composite.add(leaf2);

console.log(composite.operation()); // Output: Branch(Leaf+Leaf)

const composite2 = new Composite();
composite2.add(composite);
composite2.add(new Leaf());

console.log(composite2.operation()); // Output: Branch(Branch(Leaf+Leaf)+Leaf)
