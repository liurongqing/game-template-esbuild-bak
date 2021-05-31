import { Align, Grid } from '../../utils';

export class HomeScene extends Phaser.Scene {
  constructor() {
    super('HomeScene');
  }

  preload() {
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    const logo = this.add.image(100, 100, 'logo');

    Align.scaleTo(logo, 0.2);

    const agrid = new Grid({
      scene: this,
      debug: true,
    });

    agrid.atIndex(logo, 7);
  }
}
