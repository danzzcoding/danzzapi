__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/home', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/login', (req, res) => {
    res.sendFile(__path + '/views/login.html')
})

router.get('/signup', (req, res) => {
    res.sendFile(__path + '/views/signup.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})

router.get('/downloader', (req, res) => {
    res.sendFile(__path + '/views/downloader.html')
})

router.get('/asupan', (req, res) => {
    res.sendFile(__path + '/views/asupan.html')
})

router.get('/cecan', (req, res) => {
    res.sendFile(__path + '/views/cecan.html')
})

router.get('/convert', (req, res) => {
    res.sendFile(__path + '/views/convert.html')
})

router.get('/canvas', (req, res) => {
    res.sendFile(__path + '/views/canvas.html')
})

router.get('/random', (req, res) => {
    res.sendFile(__path + '/views/random.html')
})

module.exports = router
