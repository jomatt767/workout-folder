let express = require('express');
let router = express.router();
const validateSession = require('../middleware/validate-session');
const log = require('../db').import('../models/journal');

router.post('/create', validateSession, (req, res) => {
    const logEntry = {
        title: req.body.log.title,
        date: req.body.log.date,
        entry: req.body.log.entry,
        owner: req.user.id
    }
    log.create(logEntry)
    .then((log) => res.status(200).json(log))
    .catch((err) => res.status(500).json({error: err}));
});

/*get entries by user*/

router.get("/", (req,res) => {
    log.findAll()
    .then((log) => res.status(200).json(log))
})

router.get('/practice', function(req, res)
{
    res.send('route')
})

module.exports = router 
