const {Router} = require('express')
const authenticateRouter = Router()
const {authenticateUser} = require('../controllers/authenticateController')

authenticateRouter.get("/",authenticateUser)

module.exports = authenticateRouter