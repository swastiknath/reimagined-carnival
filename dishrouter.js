const express  = require('express');
const bodyParser = require('body-parser');

const  dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the dishes to you.');

})
.post((req, res, next) => {
    res.end('Will add the dish : ' +req.body.name + ' with details: '
    +req.body.description);
})

.put((req, res, next) => {
    res.end('Operation not supported on this endpoint');
    res.statusCode = 403;
})
.delete((req, res, next) => {
    res.end('Will Delete all the dishes to you.');

});

dishRouter.route('/:dishID')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the info about the dish '
    +req.params.dishID + 'to you.');

})
.post((req, res, next) => {
    res.end('Operation not supported on this endpoint');
    res.statusCode = 403;
})
.put((req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishID + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Will Delete the dish: ' + req.params.dishID);

});

module.exports = dishRouter;
