import * as PIXI from "pixi.js";
import { Item } from "./Item";
import { Game } from "./Game";
export class Bottle extends Item {
  public game: Game;
  constructor(texture: PIXI.Texture, game: Game, minX: number, maxX: number) {
    super(texture, minX, maxX);
    this.game = game;
  }
  update(delta: number) {
    this.time += delta;
  }
}
