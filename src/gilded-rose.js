export class GildedRose {
  items
  AGEDBRIE = 'Aged Brie'
  BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert'
  SULFURAS = 'Sulfuras, Hand of Ragnaros'

  constructor(items) {
    this.items = items
  }

  update_quality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (item.name !== this.AGEDBRIE && item.name !== this.BACKSTAGE) {
        if (item.quality > 0) {
          if (item.name !== this.SULFURAS) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.name === this.BACKSTAGE) {
            if (item.sell_in < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
            if (item.sell_in < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
          }
        }
      }
      if (item.name !== this.SULFURAS) {
        item.sell_in = item.sell_in - 1
      }
      if (item.sell_in < 0) {
        if (item.name !== this.AGEDBRIE) {
          if (item.name !== this.BACKSTAGE) {
            if (item.quality > 0) {
              if (item.name !== this.SULFURAS) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }
  }
}
