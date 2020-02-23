export class Item {
  name
  sellIn
  quality
  static AGEdBRIE = 'Aged Brie'
  static BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert'
  static SULFURAS = 'Sulfuras, Hand of Ragnaros'

  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateItem() {
    if (this.name !== Item.AGEdBRIE && this.name !== Item.BACKSTAGE) {
      if (this.quality > 0) {
        if (this.name !== Item.SULFURAS) {
          this.quality = this.quality - 1
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1
        if (this.name === Item.BACKSTAGE) {
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
    }
    if (this.name !== Item.SULFURAS) {
      this.sellIn = this.sellIn - 1
    }
    if (this.sellIn < 0) {
      if (this.name !== Item.AGEdBRIE) {
        if (this.name !== Item.BACKSTAGE) {
          if (this.quality > 0) {
            if (this.name !== Item.SULFURAS) {
              this.quality = this.quality - 1
            }
          }
        } else {
          this.quality = 0
        }
      } else {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
    }
  }

  toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`
  }
}
