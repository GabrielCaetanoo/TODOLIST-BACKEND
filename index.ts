import express from 'express';
import router from './routes';
import * as bcrypt from 'bcrypt';

const pass = "minhasenha123";
const saltRounds = 10;


bcrypt.hash(pass, saltRounds, (error, hash) => {

    //Salvaria a senha no banco de dados

    bcrypt.compare(pass, hash, (error, result) => {
        if(result) {
            console.log('Senha correta');
        }else{
            console.log('Senha incorreta');
        }
    })
});


const server = express();

server.use(express.urlencoded({ extended: true }));

server.use(router);

server.listen(3000);
