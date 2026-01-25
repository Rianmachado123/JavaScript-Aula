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

bancoDigital("João", 0);

bancoDigital("João", depositar("João", 0, 1500));
 

