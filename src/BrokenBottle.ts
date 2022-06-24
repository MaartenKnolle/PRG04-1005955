import * as PIXI from "pixi.js";
import { Item } from "./Item";
import { Game } from "./Game";
export class BrokenBottle extends Item {
  public game: Game;
  constructor(texture: PIXI.Texture, game: Game, minX: number, maxX: number) {
    super(texture, minX, maxX);
    this.game = game;
  }
  update(delta: number) {
    this.time += delta;
    if (this.time >= 120) {
      this.canMove = true;
      //this.wiggle();
    }
    if (this.canMove === true) {
      this.y += this.yspeed;
    }
    //check bottom
    if (this.y > 1000) this.game.removeItem(this);
  }

  public updateScore() {
    console.log(-10);
    this.game.addScore(-10);
    this.game.removeItem(this);
  }
  //wiggle() {}
}
