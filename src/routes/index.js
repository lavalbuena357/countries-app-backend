const express = require('express');
const countriesRouter = require ('./controllers/countriesRouter');

const router = express.Router();

router.use(express.json());

// Configurar los routers
router.use('/', countriesRouter);

module.exports = router;
