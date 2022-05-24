import * as PIXI from "pixi.js";
// import fishImage from "./images/fish.png";
// import bubbleImage from "./images/bubble.png";
// import waterImage from "./images/water.jpg";
import raccoonImage from "./images/Raccoon_climbing.png";
import backgroundImage from "./images/background.png";

class game {
  game = new game();
}

//
// STAP 1 - maak een pixi canvas
//
const pixi = new PIXI.Application();
document.body.appendChild(pixi.view);

// create a new background sprite
const background = PIXI.Sprite.from(backgroundImage);
background.width = pixi.screen.width;
background.height = pixi.screen.height;
pixi.stage.addChild(background);

//
// STAP 2 - preload alle afbeeldingen
//
const loader = new PIXI.Loader();
loader;
//   .add("fishTexture", fishImage)
//   .add("bubbleTexture", bubbleImage)
//   .add("waterTexture", waterImage);
loader.add("raccoonImage", raccoonImage);
loader.load(() => loadCompleted());

//
// STAP 3 - maak een sprite als de afbeeldingen zijn geladen
//
function loadCompleted() {
  //   let fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!);
  //   pixi.stage.addChild(fish);

  let raccoon = new PIXI.Sprite(loader.resources["raccoonImage"].texture!);
  pixi.stage.addChild(raccoon);
}
