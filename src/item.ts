import * as PIXI from "pixi.js";

export class Item extends PIXI.Sprite {
  private yspeed = 5;

  constructor(texture: PIXI.Texture) {
    super(texture);
    this.anchor.set(0.5);
    this.x = Math.random() * window.innerWidth;
    this.y = 0;
  }
  update() {
    this.y += this.yspeed;

    //check bottom
    if (this.y >= window.innerHeight) {
      this.x = Math.random() * window.innerWidth;
      this.y = 0;
    }
  }
}
