const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.get('/', async (req, res) => {
    await controller.getProductPage(req, res);
});

router.get('/:productID', async (req, res) => {
    await controller.getProductDetailPage(req, res);
});

router.get('/add', (req, res) => {
    
});

module.exports = router;
