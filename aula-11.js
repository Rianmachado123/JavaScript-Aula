const pessoa={
    nome: "Ana",
    idade: 5,
    profissao: "estudante"

}


const{nome, idade}=pessoa


console.log(nome)


function suadacao({nome, idade}){
    return `Olá, meu nome é ${nome} e tenho ${idade} anos.`
}

console.log(suadacao(pessoa));