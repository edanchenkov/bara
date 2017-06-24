import * as PIXI from "pixi.js";

const app = new PIXI.Application();

document.body.appendChild(app.view);

PIXI.loader
  .add("rocket", "./../assets/rocket.png")
  .load(
    (
      loader: PIXI.loaders.Loader,
      resources: PIXI.loaders.ResourceDictionary
    ) => {
      const rocket = new PIXI.Sprite(resources.rocket.texture);
      const rocketScale = 0.125;
      rocket.anchor.x = 0.5;
      rocket.anchor.y = 0.5;
      rocket.scale.set(rocketScale);
      rocket.position.set(app.view.width / 2, app.view.height - rocket.height);
      app.stage.addChild(rocket);
    }
  );
