const pessoa={
    nome: "Ana",
    idade: 5,
    profissao: "estudante"
}
const andre={...pessoa,
    nome: "Andre",
    profissao: "programador",
    possuiCNH: true ? 'possui' : 'não possui'
}




console.log(pessoa);
console.log(andre);

const {nome, ...idade} = pessoa

console.log(nome);
console.log(idade);




const frutas = ['banana', 'maçã', 'laranja']
const novasFrutas = [...frutas, 'mamão', 'uva']
const clone = [...frutas]
frutas.push('abacaxi')
const totalFrutas = [...frutas, ...novasFrutas]

const [primeiraFruta,segundaFruta ,...restoFrutas] = totalFrutas

console.log(frutas);
console.log(novasFrutas);
console.log(clone);
console.log(totalFrutas);
console.log(primeiraFruta);
console.log(segundaFruta);
console.log(restoFrutas);


