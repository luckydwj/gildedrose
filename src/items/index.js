export class Item {
  name
  sellIn
  quality

  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  passOneDay() {
    this.updateQuality()
    this.updateSellIn()
    if (this.isExpired()) {
      this.updateQualityAfterExpiration()
    }
  }

  updateQuality() {
    if (!this.isAgedBrie() && !this.isBackstagePass()) {
      if (this.quality > 0) {
        if (!this.isSulfuras()) {
          this.quality = this.quality - 1
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1
      }
    }
  }

  updateQualityAfterExpiration() {
    if (!this.isAgedBrie()) {
      if (!this.isBackstagePass()) {
        if (this.quality > 0) {
          if (!this.isSulfuras()) {
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

  isExpired() {
    return this.sellIn < 0
  }

  updateSellIn() {
    if (!this.isSulfuras()) {
      this.sellIn = this.sellIn - 1
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isSulfuras() {
    return false
  }

  // eslint-disable-next-line class-methods-use-this
  isBackstagePass() {
    return false
  }

  // eslint-disable-next-line class-methods-use-this
  isAgedBrie() {
    return false
  }

  toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`
  }
}
