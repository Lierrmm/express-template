const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const authenticatedRoute = express.Router();

const port = process.env.port || 3000; //process.env.port will be set by your cloud hoster of choice. fallback to 3000 for localhost.


app.use(helmet());
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //remove if using ejs templating
app.set('view engine', 'html'); //set to ejs if using ejs templating
app.use(express.json());
app.use(express.static("views"));


/* API routing */
authenticatedRoute.use(function (req, res, next) {
    res.setHeader("Cache-Control", "no-store");
    next();
});

app.use('/api', authenticatedRoute);


app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/index', async (req, res) => {
    res.redirect('/');
});

authenticatedRoute.get('/hello', async(req, res) => {
    let json = {
        hello: req.rawHeaders.find(x => x == "User-Agent")
    }
    res.json(json);
});

authenticatedRoute.post('/fail', async(req, res) => {
    res.status(401).send("Example Bad Request");
});

app.listen(port, () => {
    console.log("Listening on", port);
});