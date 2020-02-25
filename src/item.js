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

  isExpired() {
    return this.sell_in < 0
  }

  updateItem() {
    this.updateQuality()
    this.updateSellIn()
    this.updateQulityAfterExpired()
  }

  updateQuality() {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }
  }

  updateSellIn() {
    this.sell_in = this.sell_in - 1
  }

  updateQulityAfterExpired() {
    if (this.isExpired()) {
      if (this.quality > 0) {
        this.quality = this.quality - 1
      }
    }
  }
}
