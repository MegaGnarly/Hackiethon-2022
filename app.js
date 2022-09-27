const PORT = 8888;
const express = require('express');
const { redirect } = require('express/lib/response');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/homepage.html'))
})

app.get('/profile1', (req, res) => {
    res.sendFile(path.join(__dirname+'/profile1.html'))
})

app.get('/profile2', (req, res) => {
    res.sendFile(path.join(__dirname+'/profile2.html'))
})

app.get('/profile3', (req, res) => {
    res.sendFile(path.join(__dirname+'/profile3.html'))
})

app.get('/profile4', (req, res) => {
    res.sendFile(path.join(__dirname+'/profile4.html'))
})

app.use(express.static('public'));


app.listen(process.env.PORT || PORT, () => {
    console.log('\n\nWebpage is running!')
})
