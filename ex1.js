function notas (n1,n2){
    var media = (n1+n2)/2;
    if (media >= 9.5)
        console.log ("Está Aprovado ")
    else
        console.log ("Está Reprovado ")
    
    return
}

function meses (n1){
    if (n1 == 1){
        console.log("Janeiro");
    }
    else if (n1 == 2){
        console.log("Fevereiro");
    }
    else if (n1 == 3){
        console.log("Março");
    }
    else if (n1 == 4){
        console.log("Abril");
    }
    else if (n1 == 5){
        console.log("Maio");
    }
    else if (n1 == 6){
        console.log("Junho");
    }
    else if (n1 == 7){
        console.log("Julho");
    }
    else if (n1 == 8){
        console.log("Agosto");
    }
    else if (n1 == 9){
        console.log("Setembro");
    }
    else if (n1 == 10){
        console.log("Outubro");
    }
    else if (n1 == 11){
        console.log("Novembro");
    }
    else if( n1 == 12){
        console.log("Dezembro");
    }
    else{
        console.log("Não é um mês")
    }

    return
}

function calculadora (n1,n2,operador){

    if (operador == "+"){
        var soma = (n1+n2);
        console.log(soma)
    }
    else if (operador == "-"){
        var subt = (n1-n2);
        console.log(subt)
    }
    else if (operador == "*"){
        var multi = (n1*n2)
        console.log(multi)
    }
    else if (operador == "/"){
        var divisao = (n1/n2)
        console.log(divisao)
    }
    else if (operador == "^"){
        var elevado = (n1**n2)
        console.log(elevado)
    }
    else{

    }
}

function multiplos (n1,n2){
    for(i=1; i<n1; i++){
        if (i % n1 === 0){
            console.log (i)
        }
    }
}

function soma (n1){
    var s = 0;
    for(i=1; i<=n1; i++){
        s+=i;    
    }
    console.log (s) 
}

function fat(n1){
    var resultado = n1;
    var primeiroMultipicador = n1 - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
    console.log(resultado);
}

function max(n1){
    const max = Math.max(...n1); 
    console.log(max); 
}

function min(n1){
    const min = Math.min(...n1); 
    console.log(min); 
}

function med(n1){
    n1len = n1.length;
    sum = 0;
    for(i=0; i<n1len; i++){
        sum = sum + n1[i];
    }
    var media = sum / n1len;
    console.log(media);
}

//notas(20,5);
//meses(1);
//calculadora(2,2,"*");
//multiplos (5,20)
//soma (100)
//fat(4);
//max([1, 382, 3, 123, 44, 0.9, 12])
//min([1, 382, 3, 123, 44, 0.9, 12])
//med([20, 10, 10, 20, 13])