const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    
    let caminho = './views/';
    
    res.setHeader("Tipo-Conteudo", "texto/html");
    
    switch(req.url){
        case '/':
            caminho = caminho + 'index.html';
            res.statusCode = 200;
            break;
        case '/servico':
            caminho = caminho + 'servico.html';
            res.statusCode = 200;
            break;
        case '/orcamento':
            res.statusCode = 301;
            res.setHeader('Location', '/contato');
            break;
        case '/contato':
            caminho = caminho + 'contato.html';
            res.statusCode = 200;
            break;
        default:
            caminho = caminho + 'paginadeerro.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(caminho, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })

})

server.listen(3009, 'localhost', ()=>{
    console.log('Ouvindo na porta 3009');
})