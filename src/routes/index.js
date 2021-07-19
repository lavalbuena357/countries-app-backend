const express = require('express');
const countriesRouter = require ('./controllers/countriesRouter');
const carouselRouter = require ('./controllers/carouselRouter');

const router = express.Router();

router.use(express.json());

// Configurar los routers
router.use('/countries', countriesRouter);
router.use('/carousel', carouselRouter);

module.exports = router;
