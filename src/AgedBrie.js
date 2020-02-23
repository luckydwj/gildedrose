/**
 *  Created by daiwenjuan on 2020/2/23 16:29.
 */
import Item from './item'
export class AgedBrie extends Item {
  name = 'Aged Brie'
  sellIn
  quality
  constructor(name = 'Aged Brie', sellIn, quality) {
    super()
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
  isAgedBrie() {
    return this.name === 'Aged Brie'
  }
}
