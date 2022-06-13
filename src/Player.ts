import * as PIXI from "pixi.js";

export class Player extends PIXI.Sprite {
  private xspeed = 0;
  private yspeed = 0;

  constructor(texture: PIXI.Texture) {
    super(texture);

    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
  }
  update() {
    this.y += this.yspeed;
    this.x += this.xspeed;

    //check right
    if (this.x + this.width / 2 >= window.innerWidth) {
      this.x = window.innerWidth - this.width;
    }

    //check left
    if (this.x - 400 <= -400) {
      this.x = 0 + this.width / 2;
    }

    //check top
    if (this.y <= 0) {
      this.y = 0 + this.height;
    }

    //check bottom
    if (this.y >= window.innerHeight - this.height / 2) {
      this.y = window.innerHeight - this.height;
    }
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
