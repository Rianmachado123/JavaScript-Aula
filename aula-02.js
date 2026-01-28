function criar_mensagem(mensagem){
    console.log(mensagem);
}

criar_mensagem("Hello, World! This is aula-02.js");


let nome = "João";
let idade = 25;
let cidade = "São Paulo";

criar_mensagem(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);

function cadastrar_usuario(nome, idade, cidade){
    criar_mensagem('Usarário cadastrado com sucesso!');
    criar_mensagem(`Nome: ${nome}`);
    criar_mensagem(`Idade: ${idade}`);
    criar_mensagem(`Cidade: ${cidade}`);
}

cadastrar_usuario("Maria", 30, "Rio de Janeiro");


function bancoDigital(nome, saldo){
    criar_mensagem(`Bem-vindo, ${nome}! Seu saldo atual é R$${saldo}.`);
}

function depositar(nome, saldo, valor){
    saldo += valor;
    criar_mensagem(`Depósito de R$${valor} realizado com sucesso! Novo saldo: R$${saldo}.`);
    return saldo;
}


function loopPar(n){
    for(let i = 0; i <= n; i++){
        if(i % 2 === 0){
            criar_mensagem(i);
        }
    }
}


function looppalavra(palavra){
    for(let i=0;i<palavra.length;i++){
        criar_mensagem(palavra[i]);
    
    }
}


function loopDowhile(n){
    let i=0;
    do{
        criar_mensagem(i);
        i++;
    }while(i<n);
}


function loopForof(palavra){
    for(const letra of palavra){
        criar_mensagem(letra);
    }
}

bancoDigital("João", 0);

bancoDigital("João", depositar("João", 0, 1500));

loopPar(10);
looppalavra("JavaScript");
loopDowhile(5);
loopForof("Funciona!");



let numeroPar=0;
let numeroImpar=0;

function verificarNumero(n){
    if(n % 2 === 0){
        numeroPar++;
    }else{
        numeroImpar++;
    }
}

function mostrarResultado(){
    criar_mensagem(`Números pares: ${numeroPar}`);
    criar_mensagem(`Números ímpares: ${numeroImpar}`);
}

for(let i=0;i<101;i++){
    verificarNumero(i);
}

mostrarResultado();


const saudacao=nome=>console.log("olá, "+nome+"!");
saudacao("Ana");
saudacao("Carlos");
saudacao("Beatriz");


function calcular(numero1,numero2,operacao){
    return operacao(numero1,numero2);
}

function somar(a,b){
    return a+b;
}

function subtrair(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;

}

criar_mensagem("Soma: "+calcular(10,5,somar));
criar_mensagem("Subtração: "+calcular(10,5,subtrair));
criar_mensagem("Multiplicação: "+calcular(10,5,multiplicar));
criar_mensagem("Divisão: "+calcular(10,5,dividir));