No JavaScript, principalmente quando estamos usando o Node.js, usamos o comando require para incluir código de outros arquivos ou módulos dentro do nosso projeto. Pense nele como se você estivesse "importando" um pedaço de código externo que você quer reutilizar no seu próprio arquivo.

Por que usamos o require?
Imagine que você está construindo um quebra-cabeça. Você não precisa criar todas as peças do zero, pode usar peças prontas para ajudar na montagem. Da mesma forma, na programação, ao invés de escrevermos tudo do zero, usamos módulos já existentes que facilitam nossa vida.

Por exemplo, você pode querer incluir funções úteis de matemática, gerenciamento de arquivos, ou até ferramentas prontas feitas por outras pessoas.

Como usar o require?
Usar o require é muito simples! Primeiro, você precisa de um arquivo JavaScript separado que tenha o código que você quer importar. Vamos supor que você tenha criado um arquivo chamado calculadora.js:


// calculadora.js 

function soma(a, b) { 

return a + b; 

} 

 

module.exports = soma; 
Copiar código
Perceba que usamos o module.exports para dizer ao JavaScript qual função queremos tornar disponível fora desse arquivo.

Agora, em outro arquivo (app.js, por exemplo), você pode usar o require para importar essa função:


// app.js 

const soma = require('./calculadora'); 

 

console.log(soma(2, 3)); // Resultado: 5 
Copiar código
Viu só? O arquivo calculadora.js exporta a função, e o app.js importa essa função usando require.

Importando módulos prontos
Além dos arquivos que você mesmo cria, o Node.js vem com vários módulos já prontos. Por exemplo, para usar o módulo que trabalha com sistema de arquivos (fs), você faria assim:


const fs = require('fs'); 

 

fs.readFile('texto.txt', 'utf8', (err, data) => { 

if (err) throw err; 

console.log(data); 

}); 
Aqui, você não precisa especificar o caminho com ./ porque o módulo fs já vem instalado com o Node.js.

Por que isso é importante?
Entender o require é fundamental porque ele permite organizar melhor seu código, reutilizar módulos úteis e usar ferramentas poderosas criadas pela comunidade. É uma habilidade essencial para quem vai trabalhar com JavaScript, especialmente com Node.js.

Agora que você já compreendeu como o require funciona, experimente criar seus próprios módulos e começar a reutilizá-los no seu projeto!

