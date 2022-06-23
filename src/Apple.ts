import * as PIXI from "pixi.js";
import { Item } from "./Item";
import { Game } from "./Game";
export class Apple extends Item {
  public game: Game;
  constructor(texture: PIXI.Texture, game: Game, minX: number, maxX: number) {
    super(texture, minX, maxX);
    this.game = game;
  }
  update(delta: number) {
    this.time += delta;
    if (this.time >= 120) {
    }

    //check bottom
    if (this.y > 1000) this.game.removeItem(this);
  }
  //wiggle() {}
}
