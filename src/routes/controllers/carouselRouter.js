const express = require('express');
const { Carousel } = require('../../db');
// const axios = require('axios');
const router = express.Router();

//Middleware
router.use(express.json());

//Middleaware populate DB
// router.use(async (req, res, next) => {
//   try {
//     const count = await Carousel.count()
//       if(!count) {
//         const api = await axios.get('https://restcountries.eu/rest/v2/all');
//         await api.data.forEach(el => Carousel.findOrCreate({
//           where: {
//             title: el.title,
//             subtitle: el.subtitle,
//             content: el.content,
//             image: el.image,
//           }
//         }))
//       }; next();
//   } catch(err) {console.log(err)}
// })

//routes
router.get('/', async (req,  res) => {

  try {
    let carousels;
    
    carousels = await Carousel.findAndCountAll({
      attributes: ['id', 'title', 'subtitle', 'content', 'image']
    })
    return res.json(carousels)
  } catch(err) {console.log(err)}
})

module.exports = router;