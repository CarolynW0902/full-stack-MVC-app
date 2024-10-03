const express = require("express")
const router = express.Router()
const homeController = require('../controllers/home')

//handles initial GET request for the homepage
router.get('/', homeController.getIndex)//read

//handles POST method request for adding a new item
router.post('/new', homeController.createItem) //create

//export routes to use elsewhere
module.exports = router