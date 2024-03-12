const fs = require('fs').promises;
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');

class ProductModel {
  async getAllProducts() {
    try {
      const data = await fs.readFile(productsFilePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error('No se pudieron obtener los productos');
    }
  }
}

module.exports = new ProductModel();
