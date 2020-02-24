/**
 *  Created by daiwenjuan on 2020/2/24 11:43.
 */
import { Item } from './item'

export default class ItemFactory {
  static createAgedBrie(sell_in, quality) {
    return new Item('Aged Brie', sell_in, quality)
  }

  static createisBackstage(sell_in, quality) {
    return new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      sell_in,
      quality
    )
  }

  static createSulfuras(sell_in, quality) {
    return new Item('Sulfuras, Hand of Ragnaros', sell_in, quality)
  }
}
