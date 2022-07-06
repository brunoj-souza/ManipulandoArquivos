const fs = require('fs');

fs.rename('./arquivos/texto2.txt','./arquivos/novoArquivo.txt', function(err){
    if(err) throw err;
    console.log('Arquivo foi renomeado com sucesso!')
})