import * as PIXI from "pixi.js";

export class UI extends PIXI.Container {
  graphics = new PIXI.Graphics();

  constructor() {
    super();
    const style = new PIXI.TextStyle({
      fontFamily: "ARIEL",
      fontSize: 40,
      fontWeight: "bold",
      fill: ["#ffffff"],
    });

    this.graphics.lineStyle(2, 0x000000, 1);
    this.graphics.beginFill(0xffffff);
    this.graphics.drawRect(0, window.innerHeight - 200, window.innerWidth, 200);
    this.graphics.endFill();

    this.graphics.lineStyle(10, 0x000000, 1);
    this.graphics.beginFill(0xf61efa, 1);
    this.graphics.drawCircle(200, window.innerHeight - 200, 150);
    this.graphics.endFill();

    this.addChild(this.graphics);
  }
}
