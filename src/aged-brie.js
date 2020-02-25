/**
 *  Created by daiwenjuan on 2020/2/24 18:22.
 */
import { Item } from './item'

export class AgedBrie extends Item {
  // eslint-disable-next-line no-useless-constructor
  constructor(sell_in, quality) {
    super('Aged Brie', sell_in, quality)
  }

  updateQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }

  updateQulityAfterExpired() {
    if (this.isExpired()) {
      if (this.quality < 50) {
        this.quality = this.quality + 1
      }
    }
  }
}
