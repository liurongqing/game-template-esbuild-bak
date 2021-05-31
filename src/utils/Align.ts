import { GetWidth } from '@phaserjs/phaser/config/size';

export class Align {
  static scaleTo(obj: any, per: number, width = GetWidth()) {
    obj.setSize(width * per);
  }
}
