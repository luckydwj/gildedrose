import { Item } from './item'

/**
 *  Created by daiwenjuan on 2020/2/24 11:43.
 */

export default class ItemFactory {
  static createAgedBrie(sell_in, quality) {
    return new Item('Aged Brie', sell_in, quality)
  }
}
