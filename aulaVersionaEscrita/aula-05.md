vamos esclarecer um conceito fundamental que pode gerar confusão no JavaScript: a diferença real entre funções tradicionais e Arrow Functions, especialmente focando no que é o this e por que ele importa tanto.

Entendendo o que é o this
Antes de entender a diferença entre funções tradicionais e Arrow Functions, precisamos esclarecer bem o que é esse tal de this. No JavaScript, this é uma palavra-chave especial que se refere ao contexto onde uma função está sendo executada. Porém, seu valor pode mudar dependendo de como a função é invocada, o que pode gerar comportamentos inesperados.

Como funções tradicionais lidam com o this?
Com funções tradicionais (criadas usando a palavra-chave function), o valor de this é definido pela forma como a função é chamada:


function mostraNome() { 

console.log(this.nome); 

} 

 

nome = 'Ana'; // aqui, nome está no escopo global 

 

mostraNome(); // Resultado: Ana (this refere-se ao escopo global) 
Copiar código
Veja que aqui o this referenciou o escopo global porque chamamos a função diretamente. Isso pode gerar problemas quando usamos funções como callbacks (funções passadas para outras funções).

O problema antes das Arrow Functions
Antes de termos Arrow Functions, era muito comum o problema de perder o contexto (this) dentro de funções de callback. Isso acontecia muito em situações de funções internas, como callbacks em temporizadores ou eventos:


function Pessoa(nome) { 

this.nome = nome; 

 

setTimeout(function() { 

console.log(this.nome); // Aqui, this.nome fica undefined 

}, 1000); 

} 

 

new Pessoa('Carlos'); // Resultado: undefined 
Copiar código
Neste exemplo, o this dentro da função do setTimeout perdeu a referência ao objeto criado por new Pessoa().

Como lidávamos com isso antes das Arrow Functions?
A solução clássica para esse problema era o método .bind(). Com .bind(), podíamos "fixar" o contexto do this:


function Pessoa(nome) { 

this.nome = nome; 

 

setTimeout(function() { 

console.log(this.nome); // Agora funciona! 

}.bind(this), 1000); 

} 

 

new Pessoa('Carlos'); // Resultado: Carlos 
Copiar código
Usar .bind() resolvia, mas tornava o código mais verboso e complicado.

A chegada das Arrow Functions
Com as Arrow Functions, introduzidas no ES6, ficou muito mais fácil lidar com o problema do this. Isso porque Arrow Functions não possuem seu próprio valor de this. Em vez disso, elas capturam o this do contexto onde foram declaradas (lexical scoping):


function Pessoa(nome) { 

this.nome = nome; 

 

setTimeout(() => { 

console.log(this.nome); // Arrow function captura o this corretamente 

}, 1000); 

} 

 

new Pessoa('Carlos'); // Resultado: Carlos 
Copiar código
Perceba como a Arrow Function simplificou muito o nosso código!

Por que isso importa?
Entender a diferença entre funções tradicionais e Arrow Functions é fundamental, principalmente ao lidar com código legado, ou seja, sistemas antigos ou escritos antes do ES6. Muitos códigos antigos ainda utilizam funções tradicionais com .bind(). Portanto, é essencial que você compreenda essa lógica claramente, para lidar bem com qualquer cenário que encontrar.

Guia de bolso:
this: Refere-se ao contexto onde a função é chamada.

Funções tradicionais: Possuem seu próprio valor de this, dependendo da forma como são chamadas.

Arrow Functions: Não têm seu próprio this; capturam o valor de this do contexto em que são declaradas.

Antes de Arrow Functions, usávamos .bind() para corrigir problemas com this.