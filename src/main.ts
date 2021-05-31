import 'phaser';

import scene from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game',
    width: window.innerWidth,
    height: window.innerHeight,
  },
  scene,
};

globalThis.game = new Phaser.Game(config);
