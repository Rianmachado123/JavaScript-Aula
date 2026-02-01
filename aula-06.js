// filtro em arrays
function imprimirUser(nome) {
    console.log(`Nome: ${nome}`);}


const nome =['Ana', 'Bruno', 'Carlos', 'Daniela'];


const nomesComA = nome.filter(function(nome){
    return nome.toLowerCase().startsWith('a');
}   );

console.log('Nomes que começam com a letra A:');
nomesComA.forEach(imprimirUser);