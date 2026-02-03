// const pessoa={
//     nome: 'Ana',
//     idade: 5,
//     profissao: 'estudante',
//     CNH: function(idade) {
//         return idade >= 18 ? 'possui' : 'não possui';
//     }
// }




// console.log(pessoa);
// console.log(pessoa.CNH(pessoa.idade));




// const livro={
//     nome: 'O Senhor dos Anéis',
//     autor: 'J.R.R. Tolkien',
//     anoLancamento: 1954,
//     editora: 'Allen & Unwin',
//     genero: 'Fantasia',
//     idiomasDisponiveis: ['Português', 'Inglês', 'Espanhol', 'Francês']
// }

// console.log(livro);
// livro.idiomasDisponiveis.push('Alemão');
// console.log(livro.idiomasDisponiveis);


// console.log('--- Acessando propriedades dinamicamente ---');
// const propriedade = 'autor';
// console.log(livro[propriedade]);


const pessoa={
    nome :'vinicios',
    idade:37,
    pets:['dog','cat','fish'],
    naciolidade:'brasileira'
}

for(const chave in pessoa){
    console.log(`A chave é: ${chave} e o valor é: ${pessoa[chave]}`);
}

const keys = Object.keys(pessoa);
const values = Object.values(pessoa);
const entries = Object.entries(pessoa);

console.log(keys);
console.log(values);
console.log(entries);


const novaPessoa = Object.assign({}, pessoa, {altura: 1.75, peso: 70});
console.log(novaPessoa);


const protudo= {
    nome:'maça',
    preco: 2.5,
    quantidade:20
}

const valorTotal = protudo.preco * protudo.quantidade;
console.log('Valor total em estoque:',valorTotal);

const livro=[{
    nome: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
},
{
    nome: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
},
{
    nome: 'O Silmarillion',
    autor: 'J.R.R. Tolkien',

}];


for(const livroItem of livro){
    console.log(`Nome: ${livroItem.nome}, Autor: ${livroItem.autor}`);
}
