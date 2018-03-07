var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
connection.connect();

connection.query('SELECT * FROM departments', function (error, results, fields) {
  if (error) throw error;
  for (var i = 0; i < results.length; i++)
    console.log('The solution is: ', results[i].dept_name);
    
});

connection.end();
