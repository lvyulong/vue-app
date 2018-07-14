var router = require('express').Router();
var connection = require('../../dataBase/index');

router.use(function(req,res,next){
  console.log(`foo is using!`);
  next();
})

router.get('/',function(req,res,next){
  var data = {
    name: 'foo1'
  }
  console.log(req.query)
  const perPage = 20;
  let page = (req.query &&  req.query.page) || 1;
  let minLimit = (page - 1) * 20 + 1;
  let maxLimit = (page) * 20;
  connection.query(`select id,name,created_at from cv_position limit ${perPage} offset ${perPage * (page - 1)}`,function(err,rows,fields){
    if(err){
      throw err;
    }
    res.send({
      items:rows,
      currentPage:page,
      perPage:perPage
    });
    // connection.end();
  })



  // res.send(data);
})
router.get('/test/:id',function(req,res,next){
  var data = {
    name: 'test'
  }
  res.send(data);
  // res.status(501).send({msg:'服务器错误'})
})

router.post('/err/:id',function(req,res,next){
  console.log(req.body);

  // res.send(req.body);
  res.status(401).send({msg:'没有权限登录'})
})

module.exports = router;
