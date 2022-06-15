import * as PIXI from "pixi.js";
import { Game } from "./game";

export class Item extends PIXI.Sprite {
  private yspeed = 0;
  private time = 0;
  private game: Game;
  private canMove = false;

  constructor(texture: PIXI.Texture, game: Game, minX: number, maxX: number) {
    super(texture);
    this.game = game;
    this.yspeed = Math.random() * 8;
    if (this.yspeed <= 4) {
      this.yspeed + 4;
    }
    this.anchor.set(0.5);
    this.y = Math.random() * window.innerHeight;
    this.x = this.randomIntFromInterval(minX, maxX);
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

  randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  wiggle() {}
}
