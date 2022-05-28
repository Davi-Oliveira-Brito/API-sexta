export function semaforo (cor){
    let msg="";
    if(cor === "verde"){
        msg="pode passar";
    }
    else if(cor === "vermelho"){
        msg="aguarde";
    }
    else{
        msg="inválido";
    }
    return msg;
}

export function diaSemana (dia) {
    let msg="";
    if(dia === 0)
        msg="domingo";
    else if(dia === 1)
        msg="segunda-feira";
    else if(dia === 2)
        msg="terça-feira";
    else if(dia === 3)
        msg="quarta-feira";
    else if(dia === 4)
        msg="quinta-feira";
    else if(dia === 5)
        msg="sexta-feira";
    else if(dia === 6)
        msg="sábado";
    else
        msg = "invalido";

    return msg;
}
export function fatorial(num)
{
    let soma = 1;
    for (let i = 1; i <= num; i++)
    {  
        soma *= i;   
    }
    return soma;
}

export function sequenciapar(num){
    let array = [];
    for(let i = 0; i< num.length; i++){
        if(num[i] %2 == 0)
            array[i] = num[i];
    }
    return array;
}


