import * as PIXI from "pixi.js";

import raccoonImage from "./images/Raccoon_climbing.png";
import backgroundImage from "./images/background.png";
import { Player } from "./Player";

class Game {
  pixi: PIXI.Application;
  loader: PIXI.Loader;
  raccoon: Player;

  constructor() {
    this.pixi = new PIXI.Application({
      width: screen.width,
      height: screen.height,
    });
    document.body.appendChild(this.pixi.view);

    const background = PIXI.Sprite.from(backgroundImage);
    background.width = this.pixi.screen.width;
    background.height = this.pixi.screen.height;
    this.pixi.stage.addChild(background);

    this.loader = new PIXI.Loader();
    this.loader.add("raccoonImage", raccoonImage);

    this.loader.load(() => this.loadCompleted());
  }

  loadCompleted() {
    this.raccoon = new Player(this.loader.resources["raccoonImage"].texture!);
    this.pixi.stage.addChild(this.raccoon);
    console.log(this.raccoon);

    this.pixi.ticker.add((delta) => this.update(delta));
  }
  update(delta: number) {
    this.raccoon.update();
  }
}
let game = new Game();
