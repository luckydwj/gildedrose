export class Item {
  name
  sell_in
  quality

  constructor(name, sell_in, quality) {
    this.name = name
    this.sell_in = sell_in
    this.quality = quality
  }

  toString() {
    return `${this.name}, ${this.sell_in}, ${this.quality}`
  }

  isAgedBrie() {
    return false
  }

  isBackstage() {
    return false
  }

  isSulfuras() {
    return false
  }

  isExpired() {
    return this.sell_in < 0
  }

  updateQuality() {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }
  }

  updateSellIn() {
    if (!this.isSulfuras()) {
      this.sell_in = this.sell_in - 1
    }
  }

  updateQulityAfterExpired() {
    if (this.isExpired()) {
      if (!this.isAgedBrie()) {
        if (!this.isBackstage()) {
          if (this.quality > 0) {
            if (!this.isSulfuras()) {
              this.quality = this.quality - 1
            }
          }
        } else {
          this.quality = this.quality - this.quality
        }
      } else {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
    }
  }

  updateItem() {
    this.updateQuality()
    this.updateSellIn()
    this.updateQulityAfterExpired()
  }
}
