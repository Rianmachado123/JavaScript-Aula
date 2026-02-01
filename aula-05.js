function imprimirUser(nome) {
    console.log(`Nome: ${nome}`);}


console.log('Usando forEach:');
const nome =['Ana', 'Bruno', 'Carlos', 'Daniela'];

nome.forEach(imprimirUser);



console.log('nome do primeiro aluno é:', nome[0]);

console.log('\nUsando for mais recentemente :');
for(let aluno of nome){
    console.log(aluno);

}

console.log('\nUsando for tradicional:');
for(let i=0;i<nome.length;i++){
    console.log(nome[i]);
}