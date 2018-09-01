var router = require('express').Router();
var mysql = require('mysql');
var dbConfig = require("../dbConfig");

router.use(function (req, res, next) {
    console.log(`auth is using!`);
    next();
});

router.get('/', function (req, res, next) {
    var connection = mysql.createConnection(dbConfig);
    connection.connect();
    var query = `SELECT * FROM t_req_exam_que`;
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(Array.isArray(rows));
        var data = {
            items: rows
        };
        res.json(data)
        
    });
});


module.exports = router;