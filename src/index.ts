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
      rocket.setTransform(
        app.view.width / 2 - rocket.width / 2,
        app.view.height - rocket.height / 2,
        0.5,
        0.5
      );
      app.stage.addChild(rocket);

      console.log(rocket.height);

      // app.ticker.add(() => {
      // rocket.rotation += 0.01;
      // });
    }
  );
