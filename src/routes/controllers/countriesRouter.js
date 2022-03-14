const express = require('express');
const { Country } = require('../../db');
const axios = require('axios');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

//Middleware
router.use(express.json());

// function objToArr(obj) {
//   const arr = []
//   for(let item in obj) {
//     arr[arr.length] = {[item]: obj[item]}
//   }
//   return arr
// }

//Middleaware populate DB
// router.use(async (req, res, next) => {
//   try {
//     const count = await Country.count()
//       if(!count) {
//         const api = await axios.get(process.env.API_URL);

//         //se añadieron las funciones para organizar la informacion que viene de la api original para ser mas flexible
//         function orderCurr(curr) {
//           let singleObjects = []
//           for (let item in curr) {
//             singleObjects[singleObjects.length] = {id: item, name: curr[item].name, symbol: curr[item].symbol}
//           }
//           return singleObjects
//         }
//         function orderLang(lang) {
//           let singleObjects = []
//           for (let item in lang) {
//             singleObjects[singleObjects.length] = {id: item, name: lang[item]}
//           }
//           return singleObjects
//         }
//         //fin funciones

//         await api.data.forEach(el => Country.findOrCreate({
//           where: {
//             id: el.cca3,
//             official_name: el.translations.spa.official,
//             name: el.translations.spa.common,
//             capital: el.capital && el.capital[0] || "",
//             continent: el.continents[0],
//             flag: el.flags.svg,
//             coats_of_arms: el.coatOfArms && el.coatOfArms.svg || "",
//             map: el.maps.openStreetMaps,
//             lat: el.latlng[0],
//             lng: el.latlng[1],
//             currencies: el.currencies && orderCurr(el.currencies) || [],
//             languages: el.languages && orderLang(el.languages) || [],
//             borders: el.borders && el.borders || [],
//             area: el.area,
//             population: el.population,
//             timezones: el.timezones,
//             top_level_domain: el.tld && el.tld || [],
//             un_member: el.unMember,
//             independent: el.independent && el.independent || false,
//             callsign: el.idd.root && el.idd.root || "",
//             suffixes: el.idd.suffixes && el.idd.suffixes || [],
//             car_plate: el.car.signs && el.car.signs[0] || "",
//             car_side: el.car.side,
//           }
//         }))
//       }; next();
//   } catch(err) {console.log(err)}
// })

//routes
router.get('/all', async (req,  res) => {

  const { name, page, limit, currency, lang, region } = req.query

  try {
    let countries;   

    //filtrados
    if(currency || lang || region) {
      countries = await Country.findAll({
        attributes: ["id", "name", "continent", "flag", "coats_of_arms", "currencies", "languages"]
      })

      let filter = []

      if(currency && lang && region) {
        filter = countries.filter(el => el.currencies.filter(el => el.id === currency).length > 0 
          && el.languages.filter(el => el.id === lang).length > 0 && el.continent === region)
      } else if(currency && lang) {
        filter = countries.filter(el => el.currencies.filter(el => el.id === currency).length > 0 
          && el.languages.filter(el => el.id === lang).length > 0)
      } else if(currency && region) {
        filter = countries.filter(el => el.currencies.filter(el => el.id === currency).length > 0 
          && el.continent === region)
      } else if(region && lang) {
        filter = countries.filter(el => el.languages.filter(el => el.id === lang).length > 0 
          && el.continent === region)
      } else if(currency) {
        filter = countries.filter(el => el.currencies.filter(el => el.id === currency).length > 0)
      } else if(lang) {
        filter = countries.filter(el => el.languages.filter(el => el.id === lang).length > 0)
      } else {
        filter = countries.filter(el => el.continent === region)
      }

      countries = filter
      return countries.length > 0 ? res.json({count: countries.length, countries: countries}) : res.status(404).json({error: 'No search results'})
    }

    //Search by name
    if(name) {
      let nameArr = name.split('%20');
      let nameS = nameArr.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');
      countries = await Country.findAll({
        where: { 
          name: {
            [Op.like]: `${nameS}%`
          }
        },
        attributes: ["id", "name", "continent", "flag", "coats_of_arms", "currencies", "languages"]
      })
      return countries.length > 0 ? res.json({count: countries.length, countries}) : res.status(404).json({error: 'No search results'})
    }

    //pagination
    if(page) {
      const start = (page -1) * limit
      const end = page * limit
      countries = await Country.findAll({
        attributes: ["id", "name", "continent", "flag", "coats_of_arms", "currencies", "languages"]
      })
      return res.json({page, items: `${start} to ${end}`, total: countries.length, countries: countries.slice(start, end) })
    }

    countries = await Country.findAll({
      attributes: ["id", "name", "continent", "flag", "coats_of_arms", "currencies", "languages"]
    })
    return res.json({count: countries.length, countries})
  } catch(err) {console.log(err)}
})

//sort name abc
router.get('/sortabc', async (req, res) => {

  try {
    let countries;

    countries = await Country.findAll({
      order: [
        ['name', 'ASC']
      ],
    })
    return res.json({count: countries.length, countries})
  } catch(err) {console.log(err)}
})

//sort name cba
router.get('/sortcba', async (req, res) => {

  try {
    let countries;
    
    countries = await Country.findAll({
      order: [
        ['name', 'DESC']
      ],
    })
    return res.json({count: countries.length, countries})
  } catch(err) {console.log(err)}
})

//find by id detail
router.get('/detail/:idCountry', async (req, res) => {
  const idCountry = req.params.idCountry;
  const id = idCountry.toUpperCase();

  try {
    let country = await Country.findByPk(id);
    return countries ? res.json({country}) : res.status(404).json({error: 'Invalid Country Code'})
  } catch(err) {console.log(err)}
});


module.exports = router;
