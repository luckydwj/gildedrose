/**
 *  Created by daiwenjuan on 2020/2/24 11:43.
 */
import { AgedBrie } from './aged-brie'
import { BackStage } from './back-stage'
import { Sulfuras } from './sulfuras'

export default class ItemFactory {
  static createAgedBrie(sell_in, quality) {
    return new AgedBrie(sell_in, quality)
  }

  static createisBackstage(sell_in, quality) {
    return new BackStage(sell_in, quality)
  }

  static createSulfuras(sell_in, quality) {
    return new Sulfuras(sell_in, quality)
  }
}
