var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/search', function(req, res, next) {
    res.locals.connection.query(`SELECT * from keyStats where EBITDA<req.body.ebitda `, function(error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;