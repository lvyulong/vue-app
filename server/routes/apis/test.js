var router = require('express').Router();

router.use(function (req, res, next) {
    console.log(`auth is using!`);
    next();
});

router.get('/', function (req, res, next) {
    var data = {
        items: [
            {id:1,name:'test1'},
            {id:2,name:'test2'},
            {id:3,name:'test3'},
            {id:4,name:'test4'},
        ]
    };
    res.send(data)
});


module.exports = router;