/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
  {"id": 4, "title": "BPM Records", "price": 109.15, "inventory": 6},
  {"id": 5, "title": "Mouse Wheel T-7", "price": 8.51, "inventory": 16},
  {"id": 6, "title": "Heel Hook System AK-47", "price": 11.13, "inventory": 4},
  {"id": 7, "title": "Whatever It Takes", "price": 55.33, "inventory": 3},
  {"id": 8, "title": "One More Product", "price": 305.55, "inventory": 9},
  {"id": 9, "title": "Vuetify Crash Course", "price": 68.82, "inventory": 9},
  {"id": 10, "title": "Defenitive Vue Course", "price": 12.37, "inventory": 15}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}