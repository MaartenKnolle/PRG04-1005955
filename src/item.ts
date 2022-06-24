import * as PIXI from "pixi.js";

export class Item extends PIXI.Sprite {
  public yspeed = 0;
  public time = 0;
  public canMove = false;

  constructor(texture: PIXI.Texture, minX: number, maxX: number) {
    super(texture);
    this.zIndex = -1;

    this.yspeed = this.randomIntFromInterval(4, 8);
    this.anchor.set(0.5);
    this.scale.set(0.1);
    this.y = Math.random() * (window.innerHeight - 200);
    this.x = this.randomIntFromInterval(minX, maxX);
  }
  public update(delta: number) {
    this.time += delta;
  }

  public hitsPlayer(player: PIXI.Sprite) {
    return this.checkCollision(player, this);
  }

  private checkCollision(objectOne: PIXI.Sprite, objectTwo: PIXI.Sprite) {
    const bounds1 = objectOne.getBounds();
    const bounds2 = objectTwo.getBounds();

    return (
      bounds1.x < bounds2.x + bounds2.width &&
      bounds1.x + bounds1.width > bounds2.x &&
      bounds1.y < bounds2.y + bounds2.height &&
      bounds1.y + bounds1.height > bounds2.y
    );
  }

  public updateScore(): void {}

  private randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
