const express = require('express')
const exepress = require('express')
const app = express()
const port = 3000

var db=require('./database');

const sqlDelete = `delete from people where name = 'Michel'`
db.query(sqlDelete);

const sql = `INSERT INTO people (name) values ('Michel')`
db.query(sql);


app.get('/', (rqe,res) => {
    var resposta = "<div style='text-align: center;'> <h1>Full Cycle Rocks!</h1>"

    resposta += " <br>"
    resposta += " <br>"

var sql='SELECT * FROM people';
db.query(sql, function (err, data, fields) {
    if (err) throw err;
    var tabela = "<table align='center'> <tr style='text-align: center;font-weight: bold;font-size: larger;'> <td> Nomes </td> </tr>";
    data.forEach(element => {
        tabela +=  "<tr> <td>" + element.name + "</td> </tr>";    
    });

    tabela +=  "</table> </div>";
    resposta += tabela;
    res.send(resposta);
    })
});

app.listen(port , () => {
    console.log('Rodando na porta ' + port)
})