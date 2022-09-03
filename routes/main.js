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

router.get('/dashboard', (req, res) => {
    res.sendFile(__path + '/views/dashboard.html')
})

router.get('/api/downloader', (req, res) => {
    res.sendFile(__path + '/views/downloader.html')
})

router.get('/api/asupan', (req, res) => {
    res.sendFile(__path + '/views/asupan.html')
})

router.get('/api/cecan', (req, res) => {
    res.sendFile(__path + '/views/cecan.html')
})

router.get('/api/convert', (req, res) => {
    res.sendFile(__path + '/views/convert.html')
})

router.get('/api/canvas', (req, res) => {
    res.sendFile(__path + '/views/canvas.html')
})

router.get('/api/random', (req, res) => {
    res.sendFile(__path + '/views/random.html')
})

module.exports = router
