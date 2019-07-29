const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const hostname = 'localhost';
const port = 3000;

const app = express();
const dishRouter = require('./routes/dishrouter');
const promoRouter = require('./routes/promorouter');
const leaderRouter = require('./routes/leaderRouter');
app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/dishes/:dishID', dishRouter);
app.use('/promotions', promoRouter);
app.use('/promotions/:promoID', promoRouter);
app.use('/leaders', leaderRouter);
app.use('/leaders/:leaderID', leaderRouter);


app.use((req, res, next)=>{

    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>This is the PositionX Express Server </h1></body></html>");

    });
    const server = http.createServer(app);  
    server.listen(port, hostname, () => {
        console.log(`PositionX Server running at http://${hostname}:${port}`);
    });
