import express, { Application, NextFunction, Request, Response } from "express";
import { Singleton } from "./patterns/creational-patterns";
import { Creator } from "./patterns/creational-patterns/factory";
import { Builder } from "./patterns/creational-patterns/builder";
const app: Application = express();

const sigleton = Singleton.getInstance();

// Usage
const builder = new Builder();
builder.addPartA();
builder.addPartB();
const product1 = builder.getProduct();
product1.listParts(); // Output: Product parts: PartA, PartB

builder.addPartA();
builder.addPartC();
const product2 = builder.getProduct();
product2.listParts(); // Output: Product parts: PartA, PartC

app.get("/president", (req: Request, res: Response, _next: NextFunction) => {
  const president = sigleton.getPresident();
  const chip = Creator.facetoryMethod("chip");

  res.json({
    president,
    chip,
  });
});

export default app;
