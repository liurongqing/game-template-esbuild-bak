import * as Easing from '@phaserjs/phaser/math/easing';
import { Loader } from '@phaserjs/phaser/loader/Loader';
import { AddChildren } from '@phaserjs/phaser/display/';
import { AddTween } from '@phaserjs/phaser/motion/tween/nano/AddTween';
import { ImageFile } from '@phaserjs/phaser/loader/files/ImageFile';
import { Scene } from '@phaserjs/phaser/scenes/Scene';
import { Sprite } from '@phaserjs/phaser/gameobjects/';
import { StaticWorld } from '@phaserjs/phaser/world/StaticWorld';

import { Align, Grid } from '../../utils';

export class HomeScene extends Scene {
  constructor() {
    super();
    this.preload();
  }

  async preload() {
    const loader = new Loader();
    loader.add(ImageFile('bg', 'assets/bg.jpg'));

    await loader.start();

    this.create();
  }

  create() {
    const logo = new Sprite(100, 200, 'bg');
    // const world = new StaticWorld(this);

    // Align.scaleTo(logo, 0.2);

    const grid = new Grid({
      scene: this,
      debug: true
    });

    // grid.atIndex(logo, 5);

    // AddTween(logo).to(3000, { y: 400, rotation: 0 }).easing(Easing.Bounce.Out);

    // AddChildren(world, logo);
  }
}
