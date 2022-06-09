import * as PIXI from "pixi.js";

export class App {
  private pixi: PIXI.Application;
  private loader: PIXI.Loader;

  constructor() {
    this.pixi = new PIXI.Application({
      width: screen.width,
      height: screen.height,
    });
    document.body.appendChild(this.pixi.view);
  }
}
new App();
