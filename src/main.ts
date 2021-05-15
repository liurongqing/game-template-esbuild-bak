import 'phaser';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'root',
    width: window.innerWidth,
    height: window.innerHeight,
  },
  scene: {
    create() {
      this.add.text(300, 300, '123', {
        fontSize: '60',
      });
    },
  },
};

export default new Phaser.Game(config);
