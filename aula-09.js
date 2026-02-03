const agora =new Date();
console.log(agora);

const dataNascimento = new Date(1990, 10, 25,20,30,15 ); // Ano, Mês (0-11), Dia
console.log(dataNascimento);

const opçoes= {month: 'long'};

function existirData(data) {
    console.log('Ano:', data.getFullYear());
    console.log('Mês:', data.toLocaleString('pt-BR', opçoes)); // Mês começa do 0
    console.log('Dia:', data.getDate());
    console.log('Hora:', data.getHours());
    console.log('Minutos:', data.getMinutes());
    console.log('Segundos:', data.getSeconds());
    
}
existirData(dataNascimento);