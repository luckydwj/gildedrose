/**
 *  Created by daiwenjuan on 2020/2/24 18:36.
 */
import { Item } from './item'

export class BackStage extends Item {
  // eslint-disable-next-line no-useless-constructor
  constructor(sell_in, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sell_in, quality)
  }

  isBackstage() {
    return true
  }

  updateQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
      if (this.sell_in < 11) {
        this.quality = this.quality + 1
      }
      if (this.sell_in < 6) {
        this.quality = this.quality + 1
      }
    }
  }
}
