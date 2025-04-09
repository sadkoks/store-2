const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

//путь к файлу с данными
const productsPath = path.join(__dirname, 'cart.json');
//получение товаров, чтобы все прекрасно отображалось :)
app.get('/api/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
  res.json(products);
});
//добавление товара в корзину
app.post('/api/cart', (req, res) => {
  console.log(req.body);
  res.json({ success: true, product: req.body });
});
//запуск сервера
app.listen(5000, () => {
  console.log('сервер запустился! ура, победа!');
});
