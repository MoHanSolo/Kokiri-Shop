require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'General', sortOrder: 10},
    {name: 'Masks', sortOrder: 20},
    {name: 'Tonics', sortOrder: 30},
    {name: 'Bags', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Master Sword', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[0], price: 499.95},
    {name: 'Hylian Shield', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[0], price: 349.95},
    {name: 'Bombs', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[0], price: 99.95},
    {name: 'Bow & Arrows', image: 'https://i.imgur.com/m9kyiZg.jpg', category: categories[0], price: 199.95},
    {name: 'Hookshot', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[0], price: 49.95},
    {name: 'Boomerang', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[0], price: 29.95},
    {name: 'Ocarina of Time', image: 'https://i.imgur.com/dcMFbf8.jpg', category: categories[0], price: 599.95},
    {name: 'Magical Rod', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[0], price: 349.95},
    {name: 'Empty Bottle', image: 'https://i.imgur.com/oWznseY.png', category: categories[0], price: 19.95},
    {name: 'Pegasus Boots', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[0], price: 59.95},
    {name: 'Red Ring', image: 'https://i.imgur.com/Oxdxg6K.png', desc: 'Damage reduced by 25%', category: categories[0], price: 199.95},
    {name: 'Blue Ring', image: 'https://i.imgur.com/4M7di3R.png', desc: 'Damage reduced by 50%', category: categories[0], price: 399.95},
    {name: 'Majoras Mask', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[1], price: 999999999.99},
    {name: 'Deku Mask', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[1], price: 999.95},
    {name: 'Goron Mask', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[1], price: 1999.95},
    {name: 'Zora Mask', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[1], price: 2999.95},
    {name: 'Bunny Hood', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[1], price: 249.95},
    {name: 'Fierce Deity Mask', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[1], price: 999999999.99},
    {name: 'Red Potion', image: 'https://i.imgur.com/GYIe6DO.jpg', category: categories[2], price: 49.95},
    {name: 'Blue Potion', image: 'https://i.imgur.com/spWQfwp.jpg', category: categories[2], price: 24.95},
    {name: 'Green Potion', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[2], price: 19.95},
    {name: 'Bomb Bag', image: 'https://i.imgur.com/vgCrgum.jpg', category: categories[3], price: 149.95},
    {name: 'Quiver', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[3], price: 99.95},
    {name: 'Bait Bag', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[3], price: 74.95},
    {name: 'Bag of Rupees', image: 'https://i.imgur.com/DjHHze8.jpg', category: categories[3], price: 250.95},
    {name: 'Seed Satchel', image: 'https://i.imgur.com/mpqNZsh.png', category: categories[3], price: 24.95},
  ]);

  console.log(items)

  process.exit();

})();