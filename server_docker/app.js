const express = require('express')
const logger = require('morgan')

require('dotenv').config()

const app = express()
const cors = require('cors')

// view engine setup
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const routes = require('./routes')
app.use('/api', routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(res.status(404).json({}))
})

// error handler
/*app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	// render the error page
	res.status(err.status || 500)
	res.render('error')
})*/

module.exports = app
