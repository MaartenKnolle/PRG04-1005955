import * as PIXI from "pixi.js";

export class Player extends PIXI.Sprite {
  private xspeed = 0;
  private yspeed = 0;

  constructor(texture: PIXI.Texture) {
    super(texture);

    this.x = screen.width / 2;
    this.y = screen.height / 2;

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
  }
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  onKeyDown(e: KeyboardEvent): void {
    switch (e.key.toUpperCase()) {
      case "A":
      case "ARROWLEFT":
        this.xspeed = -7;
        break;
      case "D":
      case "ARROWRIGHT":
        this.xspeed = 7;
        break;
      case "W":
      case "ARROWUP":
        this.yspeed = -7;
        break;
      case "S":
      case "ARROWDOWN":
        this.yspeed = 7;
        break;
    }
  }

  private onKeyUp(e: KeyboardEvent): void {
    switch (e.key.toUpperCase()) {
      case "A":
      case "D":
      case "ARROWLEFT":
      case "ARROWRIGHT":
        this.xspeed = 0;
        break;
      case "W":
      case "S":
      case "ARROWUP":
      case "ARROWDOWN":
        this.yspeed = 0;
        break;
    }
  }
}
