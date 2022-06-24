import * as PIXI from "pixi.js";

import raccoonImage from "./images/raccoon_climbing_2.png";
import BottleImage from "./images/bottle.png";
import BrokenBottleImage from "./images/bottle_broken.png";
import appleImage from "./images/Apple.png";
import backgroundImage from "./images/background.png";
import raccoonFaceNormal from "./images/Raccoon_head_normal.png";
import raccoonFaceAngry from "./images/Raccoon_head_angry.png";

import { Player } from "./Player";
import { Bottle } from "./Bottle";
import { BrokenBottle } from "./Brokenbottle";
import { Apple } from "./Apple";
import { Item } from "./Item";
import { UI } from "./UI";

export class Game {
  private pixi: PIXI.Application;
  private loader: PIXI.Loader;
  private raccoon: Player;
  private items: Item[] = [];
  private time: number = 0;
  private interface: UI;
  private randomNumber: number;

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
      .add("BottleImage", BottleImage)
      .add("BrokenBottleImage", BrokenBottleImage)
      .add("raccoonFaceNormal", raccoonFaceNormal)
      .add("raccoonFaceAngry", raccoonFaceAngry)
      .add("appleImage", appleImage);

    this.loader.load(() => this.loadCompleted());
  }

  private loadCompleted() {
    this.raccoon = new Player(this.loader.resources["raccoonImage"].texture!);
    this.raccoon.scale.set(0.1);
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

      this.checkCollision(item);
    }
    this.spawnSystem();
  }
  private spawnSystem() {
    switch (this.time) {
      case 600:
        console.log(`left`);

        for (var i = 0; i < 5; i++) {
          this.randomNumber = Math.random() * 4;
          this.randomNumber = Math.floor(this.randomNumber);

          switch (this.randomNumber) {
            case 0:
              console.log("1");
              this.createApple(0, window.innerWidth / 3);
              break;
            case 1:
              this.createBrokenBottle(0, window.innerWidth / 3);

              break;
            case 4:
              this.createBottle(0, window.innerWidth / 3);
              break;
          }
        }
        break;
      case 1200:
        console.log(`middle`);
        for (var i = 0; i < 5; i++) {
          this.randomNumber = Math.random() * 5;
          this.randomNumber = Math.floor(this.randomNumber);

          switch (this.randomNumber) {
            case 0:
              this.createApple(
                window.innerWidth / 3,
                (window.innerWidth / 3) * 2
              );
              break;
            case 1:
            case 2:
            case 3:
              this.createBrokenBottle(
                window.innerWidth / 3,
                (window.innerWidth / 3) * 2
              );

              break;
            case 4:
              this.createBottle(
                window.innerWidth / 3,
                (window.innerWidth / 3) * 2
              );
              break;
          }
        }
        break;
      case 1800:
        console.log(`right`);

        for (var i = 0; i < 5; i++) {
          this.randomNumber = Math.random() * 4;
          this.randomNumber = Math.floor(this.randomNumber);

          switch (this.randomNumber) {
            case 0:
              this.createApple((window.innerWidth / 3) * 2, window.innerWidth);
              break;
            case 1:
              this.createBrokenBottle(
                (window.innerWidth / 3) * 2,
                window.innerWidth
              );

              break;
            case 4:
              this.createBottle((window.innerWidth / 3) * 2, window.innerWidth);
              break;
          }
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

  private createApple(min: number, max: number) {
    let item = new Apple(
      this.loader.resources["appleImage"].texture!,
      this,
      min,
      max
    );
    this.items.push(item);
    this.pixi.stage.addChild(item);
  }

  private createBrokenBottle(min: number, max: number) {
    let item = new BrokenBottle(
      this.loader.resources["BrokenBottleImage"].texture!,
      this,
      min,
      max
    );
    this.items.push(item);
    this.pixi.stage.addChild(item);
  }

  private createBottle(min: number, max: number) {
    let item = new Bottle(
      this.loader.resources["BottleImage"].texture!,
      this,
      min,
      max
    );
    this.items.push(item);
    this.pixi.stage.addChild(item);
  }

  private checkCollision(item: Item) {
    if (item.hitsPlayer(this.raccoon)) {
      item.updateScore();
    }
  }
  public addScore(score: number) {
    this.interface.addScore(score);
  }
}
let game = new Game();
