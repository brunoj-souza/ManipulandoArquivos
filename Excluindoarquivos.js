const fs = require('fs');

fs.unlink('./arquivos/texto2.txt', function(err){
    if(err) throw err;
    console.log('Arquivo foi deletado com sucesso!')
})