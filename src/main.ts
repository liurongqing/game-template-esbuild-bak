import { Game } from '@phaserjs/phaser/Game';
import {
  BackgroundColor,
  Parent,
  Scenes,
  Size,
  WebGL,
} from '@phaserjs/phaser/config';

import scenes from './scenes';

new Game(
  WebGL(),
  Parent('game'),
  Size(window.innerWidth, window.innerHeight),
  BackgroundColor(0xeeeeee),
  // BackgroundColor(0x000000),
  Scenes(scenes)
);
