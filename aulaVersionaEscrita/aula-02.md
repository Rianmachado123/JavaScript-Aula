# ópicos Abordados:

## Declaração de Variáveis:
    Utilização de let para declarar variáveis.
    Atribuição de valores a variáveis.
## Tipos de Dados Primitivos:
    string: Textos.
    number: Números inteiros e decimais.
    boolean: Valores true ou false.
    undefined: Variável declarada, mas sem valor atribuído.
    null: Representa a ausência de valor.
    symbol: Valor único e imutável.
## Operador typeof:
    Utilizado para identificar o tipo de uma variável.
    Exemplo: console.log(typeof nome);
    Symbol:
    Representa um valor único e imutável.
    Criado com Symbol().

Por que as regras de nomenclatura são essenciais
As regras para nomear variáveis vão além de obedecer à sintaxe da linguagem: elas ajudam a manter o código organizado, legível e menos propenso a erros. Em JavaScript, o parser interpreta os nomes das variáveis de forma muito rigorosa, o que significa que caracteres especiais, acentos e números no início podem gerar erros na hora da execução. Esse conjunto de normas não é arbitrário, mas sim fundamentado na forma como o interpretador lê e armazena os tokens do código.

Entendendo as restrições
Em JavaScript, um nome de variável deve começar com uma letra, o sinal de sublinhado (_) ou o cifrão ($). Qualquer tentativa de iniciar com um número, ou de usar acentuação e caracteres especiais (como ç, á, é, etc.) pode fazer com que o código não seja interpretado corretamente. Por exemplo, enquanto um nome como dataAniversario está de acordo com as convenções, algo como data aniversário (com espaço e acento) não é permitido, pois foge à regra de composição de identificadores.

Impacto no desenvolvimento
Seguir essas convenções evita problemas futuros, como erros de compilação ou comportamentos inesperados na aplicação. Além disso, um código que adere a essas normas tende a ser mais facilmente compreendido por outros profissionais que trabalham no mesmo projeto, facilitando a colaboração e a manutenção. Adotar nomes coerentes também contribui para a criação de um design system interno, no qual todos os identificadores seguem um padrão único e sem ambiguidades.

Exemplificando na prática
Considere o exemplo a seguir:

// Forma correta de declarar variáveis
let idade = 36;
let dataAniversario = "8 de julho";

// Evite nomes inválidos ou confusos
// let 8anos = "valor inválido";
// let data aniversário = "valor inválido";
Copiar código
Ao utilizar nomes de variáveis bem definidos e em conformidade com as restrições do JavaScript, o código se torna mais robusto. Essa atenção aos detalhes pode parecer pequena, mas é fundamental para evitar erros inesperados e para promover uma base de código sustentável e de fácil manutenção.