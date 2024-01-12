import { Grocery } from "./grocery.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Grocery[];

  constructor(name: string, desc: string, imagePath: string, groceries: Grocery[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = groceries;
  }
}