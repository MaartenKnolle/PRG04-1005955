import * as PIXI from "pixi.js";

export class UI extends PIXI.Container {
  private graphics = new PIXI.Graphics();
  private face = new PIXI.Sprite();
  private texture: PIXI.Texture;
  private faceNormal: PIXI.Texture;
  private faceAngry: PIXI.Texture;
  private bool = true;

  constructor(faceNormal: PIXI.Texture, faceAngry: PIXI.Texture) {
    super();
    //sprite: PIXI.Sprite;
    this.texture = faceNormal;
    this.faceNormal = faceNormal;
    this.faceAngry = faceAngry;

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

    this.addChild(this.graphics);

    this.addChild(this.face);

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
}
