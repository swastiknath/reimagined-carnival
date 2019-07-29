const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the leaders to you.');

})
.post((req, res, next) => {
    res.end('Will add the leader : ' +req.body.name + ' with details: '
    +req.body.description);
})

.put((req, res, next) => {
    res.end('Operation not supported on this endpoint');
    res.statusCode = 403;
})
.delete((req, res, next) => {
    res.end('Will Delete all the leaders');

});

leaderRouter.route('/:leaderID')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the info about the leaders '
    +req.params.leaderID + 'to you.');

})
.post((req, res, next) => {
    res.end('Operation not supported on this endpoint');
    res.statusCode = 403;
})
.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderID + '\n');
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Will Delete the leader: ' + req.params.leaderID);

});

module.exports = leaderRouter;