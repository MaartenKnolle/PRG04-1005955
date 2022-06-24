import * as PIXI from "pixi.js";

export class UI extends PIXI.Container {
  private graphics = new PIXI.Graphics();
  private face = new PIXI.Sprite();
  private arrow = new PIXI.Sprite();
  private texture: PIXI.Texture;
  private faceNormal: PIXI.Texture;
  private faceAngry: PIXI.Texture;
  private bool = true;
  private percentage: number;
  private score: number = 0;

  constructor(faceNormal: PIXI.Texture, faceAngry: PIXI.Texture) {
    super();
    //sprite: PIXI.Sprite;
    this.texture = faceNormal;
    this.faceNormal = faceNormal;
    this.faceAngry = faceAngry;
    this.percentage = window.innerWidth / 2 / 200;

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

    this.face.texture = this.texture;
    this.face.x = 200;
    this.face.y = window.innerHeight - 200;
    this.face.anchor.set(0.5);
    console.log(this.face);

    this.graphics.lineStyle(10, 0x000000, 1);
    this.graphics.beginFill(0xff0000);
    this.graphics.drawRect(
      window.innerWidth / 4,
      window.innerHeight - 175,
      (window.innerWidth / 4) * 2,
      50
    );
    this.graphics.zIndex = 100;
    this.graphics.endFill();

    this.arrow.texture = this.texture;
    this.arrow.x = window.innerWidth / 2;
    this.arrow.y = window.innerHeight - 150;
    this.arrow.anchor.set(0.5);
    this.arrow.scale.set(0.5);
    console.log(this.face);

    this.addChild(this.graphics);

    this.addChild(this.face);

    this.addChild(this.arrow);
    // this.addChild(this.sprite);
  }

  public changeTexture() {
    this.bool = !this.bool;
    if (this.bool) {
      this.face.texture = this.faceNormal;
      console.log("normal");
    } else {
      this.face.texture = this.faceAngry;
      console.log("angry");
    }
  }

  public addScore(value: number) {
    switch (true) {
      case this.score >= 100 /*this.game.win();*/:
        break;
      case this.score <= -100 /*this.game.lose()*/:
        break;
      case this.score < 100 && this.score > -100:
        this.arrow.x += value * this.percentage;
        this.score += 1 * value;
        console.log(this.score);

        break;
    }
  }
}
