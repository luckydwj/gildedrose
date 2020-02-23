export class GildedRose {
  items
  BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert' // 后台门票
  SULFURAS = 'Sulfuras, Hand of Ragnaros'
  AGEBRIE = 'Aged Brie'
  constructor(items) {
    this.items = items
  }

  quality_low(obj) {
    return obj.quality - 1
  }

  quality_up(obj) {
    return obj.quality + 1
  }

  sell_in(obj) {
    return obj.sell_in - 1
  }

  sell_in_zero(obj) {
    if (obj.name !== this.AGEBRIE) {
      if (obj.name !== this.BACKSTAGE) {
        if (obj.quality > 0) {
          if (obj.name !== this.SULFURAS) {
            obj.quality = this.quality_low(obj)
          }
        }
      } else {
        obj.quality = 0
      }
    } else {
      if (obj.quality < 50) {
        obj.quality = this.quality_up(obj)
      }
    }
  }

  noSellIn(item) {
    if (item.name !== this.SULFURAS) {
      item.sell_in = this.sell_in(item)
    }
  }

  // 后台门票的处理
  handleBackStage(item) {
    if (item.sell_in < 11 && item.quality < 50) {
      item.quality = this.quality_up(item)
    }
    if (item.sell_in < 6 && item.quality < 50) {
      item.quality = this.quality_up(item)
    }
    return item.quality
  }

  update_quality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (item.name !== this.AGEBRIE && item.name !== this.BACKSTAGE) {
        if (item.quality > 0) {
          if (item.name !== this.SULFURAS) {
            item.quality = this.quality_low(item)
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality =
            item.name === this.BACKSTAGE
              ? this.handleBackStage(item)
              : this.quality_up(item)
        }
      }

      this.noSellIn(item)

      if (item.sell_in < 0) {
        this.sell_in_zero(item)
      }
    }
  }
}
