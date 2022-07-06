const fs = require('fs');

//Criando um novo arquivo com o metodo .appendFile

fs.appendFile('./arquivos/texto2.txt', '\nSegunda mensagem', function(err){
    if(err) throw err;
   console.log('Arquivo criado com sucesso!');
})


// Criando um arquivo em branco com o metodo .open()
//fs.open('./arquivos/texto3.txt', 'w', function(err){
//    if(err) throw err;
//    console.log('Arquivo com arquivo foi criado com sucesso!')
//});


//Criando um novo arquivo com o metodo writeFile()
//fs.writeFile('./arquivos/texto4.txt','Nova mensagem!', function(err){
//    if (err) throw err;
//    console.log('Arquivo criado com sucesso!')
//})



