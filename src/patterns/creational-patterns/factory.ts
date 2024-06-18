import { Product } from "./@types/creational.types";

class CreateComputer implements Product {
  createChip(): string {
    return "Nvidia chip";
  }
  createScreen(): number {
    return 10 * 80;
  }
}

export class Creator {
  public static facetoryMethod(type: string): Product {
    if (type === "chip") {
      return new CreateComputer();
    } else {
      throw new Error("Invalid product type");
    }
  }
}
