/**
 *  Created by daiwenjuan on 2020/2/24 11:01.
 */
import { Item } from './item'

export class AgedBrie extends Item {
  // eslint-disable-next-line no-useless-constructor
  constructor(sell_in, quality) {
    super('Aged Brie', sell_in, quality)
  }

  isAgedBrie() {
    return true
  }
}
