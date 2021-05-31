import { GetWidth, GetHeight } from '@phaserjs/phaser/config/size';
import { Text, SetFillStyle } from '@phaserjs/phaser/gameobjects/text';
import { StaticWorld } from '@phaserjs/phaser/world/StaticWorld';
import { AddChildren } from '@phaserjs/phaser/display';

export class Grid {
  cw: number;
  ch: number;
  rows: number;
  cols: number;
  origin: number[];
  scene: any;
  debug: boolean;

  constructor({
    scene = null,
    rows = 5,
    cols = 5,
    origin = [0.5, 0.5],
    debug = false,
  }) {
    if (!scene) console.log('missing scene');
    const width = GetWidth();
    const height = GetHeight();

    this.scene = scene;
    this.rows = rows;
    this.cols = cols;
    this.origin = origin;
    this.debug = debug;
    this.cw = width / cols;
    this.ch = height / rows;

    if (debug) {
      this.draw();
    }
  }

  at(obj: any, row: number, col: number) {
    const x = this.cw * col + this.cw * this.origin[0];
    const y = this.ch * row + this.ch * this.origin[1];
    obj.setPosition(x, y);
  }

  atIndex(obj: any, index: number) {
    const row = Math.floor(index / this.cols);
    const col = index - row * this.cols;
    this.at(obj, row, col);
  }

  draw() {
    const world = new StaticWorld(this.scene);
    let count = 0;
    const texts = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const text = new Text(0, 0, String(count + 'x1'));
        text.setOrigin(0.5, 0.5);
        SetFillStyle('#ff0000', text);
        this.atIndex(text, count);
        texts.push(text);
        count++;
      }
    }
    AddChildren(world, ...texts);
  }
}
