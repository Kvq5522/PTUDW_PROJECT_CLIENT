const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.get('/', async (req, res) => {
    await controller.getProductPage(req, res);
});

router.get('/api', async (req, res) => {
    await controller.getProductAPI(req, res);
});

module.exports = router;
