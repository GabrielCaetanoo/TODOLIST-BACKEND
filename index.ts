import express from 'express';
import router from './routes';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const payload = {
    userId: 'a36b7a2f-7a7e-4b7e-92d1-97c028058f5e',
    name: 'Gabriel Caetano'
}

const secret = 'ef302e1b-7a60-41db-9c08-4d41ff714db8';

const option = {
    expiresIn: '1h'
}

const token = jwt.sign(payload, secret, option);

console.log(token);


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
