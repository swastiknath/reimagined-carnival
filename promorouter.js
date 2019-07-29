const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end("Will send all the Promos to You");
})
.post((req, res, next) => {
    res.end('Will add the promo : ' +req.body.name + ' with details: '
    +req.body.description);
})

.put((req, res, next) => {
    res.end('Operation not supported on this endpoint');
    res.statusCode = 403;
})
.delete((req, res, next) => {
    res.end('Will Delete all the promos for you.');

});

promoRouter.route('/:promoID')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the info about the promotion '
    +req.params.promoID + 'to you.');

})
.post((req, res, next) => {
    res.end('Operation not supported on this endpoint');
    res.statusCode = 403;
})
.put((req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoID + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Will Delete the promotion specified as: ' + req.params.promoID);

});

module.exports = promoRouter;