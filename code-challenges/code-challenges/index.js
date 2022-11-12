// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var n = parseInt(gets());
var total = 0; // --> Adicionando uma variavel para incremento da soma
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
for(var i = 1; i <= n; i++){
  if(i % a === 0) // Verificando se o numero é divisivel com o operador de Atribuição de Resto (%)
    total = total + i; // Se tivermos o resto 0 então incremento o valor desse número na variavel total
}

print (total) // mostrar o resultado