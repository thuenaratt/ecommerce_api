var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const priceService = require('../services/price');



router.post('/create', auth.ensureSignedIn, async (req, res) => {
  const { product, price, source } = req.body;
  const result = await priceService.create({ product, price, source })
  res.json(result);
})

// all itens
router.get('/all',async (req, res) => {
  const result = await priceService.findAll()
  res.json(result)
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  res.json({});
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

module.exports = router