import * as PIXI from "pixi.js";

import raccoonImage from "./images/raccoon_climbing_2.png";
import bottleImage from "./images/bottle_broken.png";
import backgroundImage from "./images/background.png";
import raccoonFaceNormal from "./images/Raccoon_head_normal.png";
import raccoonFaceAngry from "./images/Raccoon_head_angry.png";
import { Player } from "./Player";
import { Item } from "./item";
import { UI } from "./ui";

export class Game {
  private pixi: PIXI.Application;
  private loader: PIXI.Loader;
  private raccoon: Player;
  private items: Item[] = [];
  private time: number = 0;
  private interface: UI;

  constructor() {
    this.pixi = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: window.devicePixelRatio,
      autoDensity: true,
    });
    document.body.appendChild(this.pixi.view);

    const background = PIXI.Sprite.from(backgroundImage);
    background.width = this.pixi.screen.width;
    background.height = this.pixi.screen.height;
    this.pixi.stage.addChild(background);

    this.loader = new PIXI.Loader();
    this.loader
      .add("raccoonImage", raccoonImage)
      .add("bottleImage", bottleImage)
      .add("raccoonFaceNormal", raccoonFaceNormal)
      .add("raccoonFaceAngry", raccoonFaceAngry);

    this.loader.load(() => this.loadCompleted());
  }

  private loadCompleted() {
    this.raccoon = new Player(this.loader.resources["raccoonImage"].texture!);
    this.raccoon.scale.set(0.25);
    this.raccoon.anchor.set(0.5, 0.5);
    this.pixi.stage.addChild(this.raccoon);

    this.interface = new UI(
      this.loader.resources["raccoonFaceNormal"].texture!,
      this.loader.resources["raccoonFaceAngry"].texture!
    );
    this.pixi.stage.addChild(this.interface);

    this.pixi.ticker.add((delta) => this.update(delta));
  }
  private update(delta: number) {
    this.time++;

    this.time = Math.floor(this.time);

    this.raccoon.update();

    for (let item of this.items) {
      item.update(delta);
    }

    switch (this.time) {
      case 600:
        console.log(`left`);

        for (var i = 0; i < 5; i++) {
          let item = new Item(
            this.loader.resources["bottleImage"].texture!,
            this,
            0,
            window.innerWidth / 3
          );
          item.scale.set(0.2);
          this.items.push(item);
          this.pixi.stage.addChild(item);
        }
        break;
      case 1200:
        console.log(`middle`);

        for (var i = 0; i < 5; i++) {
          let item = new Item(
            this.loader.resources["bottleImage"].texture!,
            this,
            window.innerWidth / 3,
            (window.innerWidth / 3) * 2
          );
          item.scale.set(0.2);
          this.items.push(item);
          this.pixi.stage.addChild(item);
        }
        break;
      case 1800:
        console.log(`right`);

        for (var i = 0; i < 5; i++) {
          let item = new Item(
            this.loader.resources["bottleImage"].texture!,
            this,
            (window.innerWidth / 3) * 2,
            window.innerWidth
          );
          item.scale.set(0.2);
          this.items.push(item);
          this.pixi.stage.addChild(item);
        }
        this.time = 0;
        break;
    }
  }
  public removeItem(itemToRemove: Item) {
    this.items = this.items.filter((item: Item) => item != itemToRemove);
    this.pixi.stage.removeChild(itemToRemove);
    this.interface.changeTexture();
  }
}
let game = new Game();
