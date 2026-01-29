const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('qual o seu nome? ',(nome)=>{
    console.log(`ola ${nome}`);
    rl.question('qual a sua idade? ',(idade)=>{
        console.log(`voce tem ${idade} anos`);
        if(idade>18)console.log('voce e maior de idade');
        else console.log('voce e menor de idade');
        rl.close();
    })
    
   
})