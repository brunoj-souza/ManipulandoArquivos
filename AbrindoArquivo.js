const fs = require('fs');

fs.readFile('./arquivos/texto.md', 'utf-8', function(err,data){
    if (err) throw err;
    console.log(data)
});