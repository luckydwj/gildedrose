import { Item } from './index'

export class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }

  // eslint-disable-next-line class-methods-use-this
  isBackstagePass() {
    return true
  }

  updateQuality() {
    // super.updateQuality()
    if (this.sellIn < 11) {
      if (this.quality < 50) {
        this.quality = this.quality + 1
      }
    }
    if (this.sellIn < 6) {
      if (this.quality < 50) {
        this.quality = this.quality + 1
      }
    }
  }
}
