/**
 *  Created by daiwenjuan on 2020/2/24 18:40.
 */
import { Item } from './item'

export class Sulfuras extends Item {
  // eslint-disable-next-line no-useless-constructor
  constructor(sell_in, quality) {
    super('Sulfuras, Hand of Ragnaros', sell_in, quality)
  }
  isSulfuras() {
    return true
  }

  updateQuality() {}

  updateSellIn() {}

  updateQulityAfterExpired() {}
}
