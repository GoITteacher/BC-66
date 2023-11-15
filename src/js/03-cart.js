/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    this.items.push(product);
  },

  remove(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === productName) {
        this.items.splice(i, 1);
        break;
      }
    }
  },
  clear() {
    this.items = [];
  },
  getTotalPrice() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.price * item.amount;
    }
    return sum;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.amount += 1;
        break;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.amount -= 1;
        break;
      }
    }
  },
};

cart.add({ name: '🍎', price: 50, amount: 1 });
cart.add({ name: '🍋', price: 60, amount: 5 });
cart.add({ name: '🍋', price: 60, amount: 3 });
cart.add({ name: '🍓', price: 110, amount: 3 });

// cart.remove('🍋');
cart.increaseQuantity('🍎');
cart.increaseQuantity('🍎');
cart.decreaseQuantity('🍓');
cart.decreaseQuantity('🍓');

console.log(cart.getItems());
console.log(cart.getTotalPrice());
