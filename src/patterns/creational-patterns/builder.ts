class Product {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

export class Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  public reset(): void {
    this.product = new Product();
  }

  public addPartA(): void {
    this.product.parts.push("PartA");
  }

  public addPartB(): void {
    this.product.parts.push("PartB");
  }

  public addPartC(): void {
    this.product.parts.push("PartC");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}
