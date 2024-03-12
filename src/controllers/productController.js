const productModel = require('../models/productModel');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await productModel.getAllProducts();
      res.render('home', { products });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  },
  getRealTimeProducts: async (req, res) => {
    try {
      const products = await productModel.getAllProducts();
      res.render('realTimeProducts', { products });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos en tiempo real' });
    }
  },
};

module.exports = productController;
