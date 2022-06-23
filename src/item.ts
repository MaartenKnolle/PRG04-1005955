import * as PIXI from "pixi.js";

export class Item extends PIXI.Sprite {
  public yspeed = 0;
  public time = 0;
  public canMove = false;

  constructor(texture: PIXI.Texture, minX: number, maxX: number) {
    super(texture);

    this.yspeed = Math.random() * 8;
    if (this.yspeed <= 4) {
      this.yspeed + 4;
    }
    this.anchor.set(0.5);
    this.y = Math.random() * window.innerHeight;
    this.x = this.randomIntFromInterval(minX, maxX);
  }
  public update(delta: number) {
    this.time += delta;
  }

  private randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
