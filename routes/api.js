__path = process.cwd()

// Module
var express = require('express');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();

// Setting
const creator = 'Danzz Coding'

// Loghandler
loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    apikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    },
    nottext: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid text, masukkan parameter text',
    	maintanied_by: `${creator}`,
    }
}

// Feature

// Downloader
router.get('/downloader/youtube', async (req, res, next) => {  
url = req.query.url
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/yt?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/downloader/facebook', async (req, res, next) => {  
url = req.query.url
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/fbdown?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/downloader/twitter', async (req, res, next) => {  
url = req.query.url
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/twitter?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/downloader/instagram', async (req, res, next) => {  
url = req.query.url
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/igdowloader?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/downloader/igstory', async (req, res, next) => {  
username = req.query.username
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/igstory?username=${username}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/downloader/igreels', async (req, res, next) => {  
url = req.query.url
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/igreels?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/downloader/tiktok', async (req, res, next) => {  
url = req.query.url
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/tiktok?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/downloader/soundcloud', async (req, res, next) => {  
url = req.query.url
fetch(encodeURI(`https://ramdani-api.herokuapp.com/api/dowloader/soundcloud?url=${url}`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

//Asupan
router.get('/asupan/santuy', async (req, res, next) => {  
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/asupan/bocil', async (req, res, next) => {  
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/asupan/ukhty', async (req, res, next) => {  
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/asupan/gheayubi', async (req, res, next) => {  
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

router.get('/asupan/rikagusriani', async (req, res, next) => {  
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

//Cecan
router.get('/cecan/random', async (req, res, next) => {  
fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
.then(response => response.json())
.then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.json({ result })})})

//Convert
router.get('/convert/tourl', async (req, res, next) => {  
fetch(encodeURI(`https://hadi-api.herokuapp.com/docs/converter`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

// CANVAS 
router.get('/canvas/sadcat', async (req, res, next) => {
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/sadcat?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/facts', async (req, res, next) => {
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/facts?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/pikachu', async (req, res, next) => {
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/pikachu?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/biden', async (req, res, next) => {
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/biden?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/oogway', async (req, res, next) => {
text = req.query.text 
if (!text) return res.json({message: 'MASUKKAN TEXT' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/oogway?text=${text}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/gun', async (req, res, next) => {
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/gun?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/greyscale', async (req, res, next) => {
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/greyscale?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/ad', async (req, res, next) => {
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/ad?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/blur', async (req, res, next) => {
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/blur?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/uncover', async (req, res, next) => {
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/uncover?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/invert', async (req, res, next) => {
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/invert?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

router.get('/canvas/alert', async (req, res, next) => {
url = req.query.url 
if (!url) return res.json({message: 'MASUKKAN URL IMAGE' }) 
var requestSettings = {
url: `https://myselfff.herokuapp.com/docs/canvas/alert?url=${url}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)})})

// Random
router.get('/random/meme', async (req, res, next) => {  
fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/random/meme`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

module.exports = router