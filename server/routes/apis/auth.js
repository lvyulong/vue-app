var router = require('express').Router();

router.use(function (req, res, next) {
    console.log(`auth is using!`);
    next();
});

router.get('/current', function (req, res, next) {
    var data = {
        data: {
            user: {
                name: '吕玉龙',
                desc: '这是一个本地的测试数据'
            }
        }
    };
    res.send(data)
});
router.post('/login', function (req, res, next) {
    var data = {
        msg: '伪造的登录，没有session验证'
    };
    res.send(data)
});
router.post('/logout', function (req, res, next) {
    var data = {
        name: '伪造的注销'
    };
    res.send(data)
});

module.exports = router;