import { GetWidth, GetHeight } from '@phaserjs/phaser/config/size';
export class Grid {
  cw: number;
  ch: number;

  constructor({ scene = null, cols = 5, rows = 5 }) {
    if (!scene) console.log('missing scene');
    const width = GetWidth();
    const height = GetHeight();
    this.cw = width / cols;
    this.ch = height / rows;
  }

  drawLine() {
    // this.graphics = this.scene.add.graphics();
    // this.graphics.lineStyle(2, 0xff0000);
    // if (this.config.depth) {
    //   this.graphics.setDepth(this.config.depth);
    // }
    // for (var i = 0; i < this.config.width; i += this.cw) {
    //   this.graphics.moveTo(i, 0);
    //   this.graphics.lineTo(i, this.config.height);
    // }
    // for (var j = 0; j < this.config.height; j += this.ch) {
    //   this.graphics.moveTo(0, j);
    //   this.graphics.lineTo(this.config.width, j);
    // }
    // this.graphics.setPosition(this.config.x, this.config.y);
    // this.graphics.strokePath();
  }

  // at(obj:any, row, col){
  //   const x =
  // }

  at1(xx, yy, obj, offset) {
    // var x2 = this.cw * xx + this.cw / 2;
    // var y2 = this.ch * yy + this.ch / 2;
    // x2 += this.config.x;
    // y2 += this.config.y;
    // if (offset) {
    //   x2 += offset.x;
    //   y2 += offset.y;
    // }
    // obj.x = x2;
    // obj.y = y2;
  }

  atIndex(index, obj, offset) {
    // var yy = Math.floor(index / this.config.cols);
    // var xx = index - yy * this.config.cols;
    // this.placeAt(xx, yy, obj, offset);
  }

  showLine() {
    // this.drawLine();
    // var count = 0;
    // for (var i = 0; i < this.config.rows; i++) {
    //   for (let j = 0; j < this.config.cols; j++) {
    //     var numText = this.scene.add.text(0, 0, count, { color: '#ff0000' });
    //     numText.setOrigin(0.5, 0.5);
    //     this.placeAtIndex(count, numText);
    //     if (this.config.depth) {
    //       numText.setDepth(this.config.depth);
    //     }
    //     count++;
    //   }
    // }
  }
}
