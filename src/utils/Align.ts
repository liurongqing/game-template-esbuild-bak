export class Align {
  static scaleTo(obj: any, per: number, width = globalThis.game.config.width) {
    obj.displayWidth = width * per;
    obj.scaleY = obj.scaleX;
  }
}
