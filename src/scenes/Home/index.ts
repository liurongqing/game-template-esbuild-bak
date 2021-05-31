export class HomeScene extends Phaser.Scene {
  constructor() {
    super('HomeScene');
  }

  preload() {
    this.load.image('bg', 'assets/bg.jpg');
  }

  create() {
    console.log('2...');
    this.add.image(100, 100, 'bg');
  }
}
