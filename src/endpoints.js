import { Router } from "express";
const server = Router();
import {semaforo, diaSemana, fatorial, sequenciapar} from './services.js';

server.get('/semaforo/:cor', (req, resp) => {    
    
    let cor = req.params.cor;
    let a = semaforo(cor);

    resp.send({
        semaforo : a
    })
      
})

server.get('/diaSemana', (req, resp) => {

    let dia = Number(req.query.dia);
    let x = diaSemana(dia);

    resp.send({
        diaSemana : x
    })
})

server.post('/fatorial', (req,resp) =>{
    const num = Number(req.body.num);
    const x = fatorial(num);

    resp.send({
        numero:x
    })
})

server.post('/sequencia', (req,resp) =>{
    const num = req.body.num;
    const x = sequenciapar(num);

    resp.send({
        numero:x
    })
})

export default server;