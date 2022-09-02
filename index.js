var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000

var main = require('./routes/main'),
    api = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', main)
app.use('/api', api)

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

module.exports = app
