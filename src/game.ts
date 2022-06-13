import * as PIXI from "pixi.js";

import raccoonImage from "./images/raccoon_climbing_2.png";
import backgroundImage from "./images/background.png";
import { Player } from "./Player";
import { Item } from "./Item";

class Game {
  pixi: PIXI.Application;
  loader: PIXI.Loader;
  raccoon: Player;
  item: Item;

  constructor() {
    this.pixi = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
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
    {
      this.raccoon = new Player(this.loader.resources["raccoonImage"].texture!);
      this.raccoon.scale.set(0.25);
      this.raccoon.anchor.set(0.5, 0.5);
      this.pixi.stage.addChild(this.raccoon);
      console.log(this.raccoon);
    }
    {
      this.item = new Item(this.loader.resources["raccoonImage"].texture!);
      this.item.scale.set(0.25);
      this.pixi.stage.addChild(this.item);
    }

    this.pixi.ticker.add((delta) => this.update(delta));
  }
  update(delta: number) {
    this.raccoon.update();
    this.item.update();
  }
}
let game = new Game();
