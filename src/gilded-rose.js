export class GildedRose {
  items

  constructor(items) {
    this.items = items
  }

  update_quality() {
    for (const item of this.items) {
      item.updateItem()
    }
  }
}
