const AdminRoutes = require('express').Router()

const { register, login } = require('./admin.controller')

AdminRoutes.post('/register', register)
AdminRoutes.post('/login', login)

module.exports = AdminRoutes