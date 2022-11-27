const QuoteRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middelware')

const { getQuotes, getQuote, postQuote, patchQuote, deleteQuote  } = require('./quote.controller')

QuoteRoutes.get('/', [isAuth], getQuotes)
QuoteRoutes.get('/:id', [isAuth], getQuote)
QuoteRoutes.post('/register',  postQuote)
QuoteRoutes.patch('/:id', [isAuth], patchQuote)
QuoteRoutes.delete('/:id', [isAuth], deleteQuote)

module.exports = QuoteRoutes