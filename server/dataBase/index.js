var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '182.254.213.189',
  user: 'xuzhiyuan',
  password: '123456',
  database: 'company_demo'
});

module.exports = connection;