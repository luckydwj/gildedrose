import { GildedRose } from './gilded-rose'
import { Item } from './item'

describe('GildedRoseTest', () => {
  it('foo', () => {
    const items = [new Item('foo', 1, 5)]

    const app = new GildedRose(items)
    app.update_quality()

    expect(app.items[0].name).toEqual('foo')
    expect(app.items[0].quality).toEqual(4)
    expect(app.items[0].sell_in).toEqual(0)
  })

  it('foo-1', () => {
    const items = [new Item('foo', -1, 0)]

    const app = new GildedRose(items)
    app.update_quality()

    expect(app.items[0].name).toEqual('foo')
    expect(app.items[0].quality).toEqual(0)
    expect(app.items[0].sell_in).toEqual(-2)
  })

  it('foo-2', () => {
    const items = [new Item('foo', 1, -2)]

    const app = new GildedRose(items)
    app.update_quality()

    expect(app.items[0].name).toEqual('foo')
    expect(app.items[0].quality).toEqual(-2)
    expect(app.items[0].sell_in).toEqual(0)
  })

  it('foo-3', () => {
    const items = [new Item('foo', -1, 2)]

    const app = new GildedRose(items)
    app.update_quality()

    expect(app.items[0].name).toEqual('foo')
    expect(app.items[0].quality).toEqual(0)
    expect(app.items[0].sell_in).toEqual(-2)
  })

  it('AgedBrie', () => {
    const items = [new Item('Aged Brie', 1, 5)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual('Aged Brie')
    expect(app.items[0].quality).toEqual(6)
    expect(app.items[0].sell_in).toEqual(0)
  })

  it('AgedBrie-1', () => {
    const items = [new Item('Aged Brie', -1, 5)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual('Aged Brie')
    expect(app.items[0].quality).toEqual(7)
    expect(app.items[0].sell_in).toEqual(-2)
  })

  it('AgedBrie-2', () => {
    const items = [new Item('Aged Brie', -1, 51)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual('Aged Brie')
    expect(app.items[0].quality).toEqual(51)
    expect(app.items[0].sell_in).toEqual(-2)
  })

  it('SellIn <0', () => {
    const items = [new Item('food', -1, 60)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual('food')
    expect(app.items[0].quality).toEqual(58)
    expect(app.items[0].sell_in).toEqual(-2)
  })

  it('Sulfuras', () => {
    const items = [new Item('Sulfuras, Hand of Ragnaros', 1, 5)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(app.items[0].quality).toEqual(5)
    expect(app.items[0].sell_in).toEqual(1)
  })

  it('Sulfuras-1', () => {
    const items = [new Item('Sulfuras, Hand of Ragnaros', -1, 5)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(app.items[0].quality).toEqual(5)
    expect(app.items[0].sell_in).toEqual(-1)
  })

  it('Backstage pass', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    )
    expect(app.items[0].quality).toEqual(8)
    expect(app.items[0].sell_in).toEqual(4)
  })
  it('Backstage pass-1', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    )
    expect(app.items[0].quality).toEqual(7)
    expect(app.items[0].sell_in).toEqual(9)
  })
  it('Backstage pass-2', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    )
    expect(app.items[0].quality).toEqual(0)
    expect(app.items[0].sell_in).toEqual(-1)
  })

  it('Backstage pass-3', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', -1, 5)]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    )
    expect(app.items[0].quality).toEqual(0)
    expect(app.items[0].sell_in).toEqual(-2)
  })

  it('Backstage pass-4', () => {
    const items = [
      new Item('Backstage passes to a TAFKAL80ETC concert', -1, 52),
    ]
    const app = new GildedRose(items)
    app.update_quality()
    expect(app.items[0].name).toEqual(
      'Backstage passes to a TAFKAL80ETC concert'
    )
    expect(app.items[0].quality).toEqual(0)
    expect(app.items[0].sell_in).toEqual(-2)
  })
})
