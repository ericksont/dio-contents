🎯 Desafio Criativo: Projetando o Prompt de um Agente de Atendimento ao Cliente
Bem-vindo ao Desafio Criativo.

Nesta atividade, você seguirá algumas etapas simples que, ao final, irão ajudar a escrever o Prompt que define o comportamento de um Agente de atendimento ao cliente, do que ele resolve sozinho até o que ele nunca deve fazer.

💡 Sobre o Exercício
Um bom prompt nasce de intenção clara, contexto e instruções específicas. Durante o desafio, você irá organizar suas ideias e transformá-las em comandos claros.

🧩 Construção Passo a Passo
Cada etapa adicionará uma nova peça ao seu prompt final. Ao concluir todas, você terá um prompt capaz de orientar uma IA a produzir exatamente o que você imaginou.

🚀 Como Resolver
Siga cada passo com atenção, registre suas respostas e, ao final, una todos os elementos para formar seu prompt final.

Aproveite o processo criativo!

---

🧱 Passo 1: Defina Quem é o Agente e Quem Ele Atende
Nesta etapa, você vai dizer em linguagem natural qual é o papel do seu Agente, quem procura ele e quais pedidos ele resolve.

✍️ O que fazer
"Crie um chatbot de atendimento" é o tipo de pedido que devolve um texto genérico, cheio de "Olá! Como posso ajudar?" e nada mais. O modelo não sabe de que empresa você fala, quem é a pessoa do outro lado, nem o que está autorizado a responder.

Comece nomeando três coisas: o papel do Agente, o público que fala com ele e a lista curta de assuntos que ele cobre. Escolha um cenário que você conheça, pode ser o banco onde você é cliente, a operadora do seu celular ou a loja onde você comprou algo recentemente.

Antes de escrever, responda para si:

Que empresa ou serviço esse Agente representa, e em qual canal ele atende? Chat do site, aplicativo, WhatsApp?
Quem é a pessoa que chega falando com ele, e em que situação? Alguém com pressa, com dúvida simples, com problema já em andamento?
Quais são os três ou quatro pedidos mais comuns que ele precisa dar conta?
📋 Modelo para você adaptar
Copie o bloco abaixo no seu editor de texto e preencha os campos entre colchetes:

```
Você é um Agente de atendimento ao cliente de [empresa ou tipo de serviço], atuando no [canal: chat do app, site, WhatsApp].

Quem fala com você: [descrição de quem é o cliente e em que situação ele costuma chegar].

Os pedidos que você resolve são:
- [pedido comum 1]
- [pedido comum 2]
- [pedido comum 3]

Seu objetivo em cada conversa é [o que caracteriza um atendimento bem resolvido, em uma frase].
```

✨ Exemplo preenchido
Veja como ficaria o Modelo acima já preenchido em um caso real (use como referência, não copie literalmente):

```
Você é um Agente de atendimento ao cliente de um banco digital, atuando no chat do aplicativo.

Quem fala com você: pessoa física, cliente do banco, geralmente no celular e com pressa, que já tentou resolver sozinha no app antes de abrir o chat.

Os pedidos que você resolve são:
- Consultar o valor e a data de vencimento da fatura do cartão
- Explicar o motivo de uma cobrança que o cliente não reconhece
- Orientar o passo a passo para desbloquear um cartão novo
- Informar o limite disponível e como pedir aumento

Seu objetivo em cada conversa é responder a dúvida na primeira mensagem sempre que possível, sem pedir informação que o cliente já forneceu.
```

---

🧱 Passo 2: Dê Contexto, Regras de Conduta e Formato de Resposta
Nesta etapa, você vai somar ao seu prompt o tom de voz, o formato da resposta, os limites do Agente e o que ele faz quando não sabe.

✍️ O que fazer
O Passo 1 disse o que o Agente faz. Falta dizer como ele faz, e principalmente o que ele não faz.

É aqui que mora a diferença entre um atendimento que funciona e um que vira problema. Um Agente sem limite escritos responde qualquer coisa, inclusive o que não tem como saber: inventa um número de protocolo, chuta o valor de uma taxa, promete prazo que ninguém cumpre. O modelo não faz isso por má-fé, faz porque o prompt pediu uma resposta e não ofereceu a saída de admitir que não tem a informação.

Escreva também o que acontece quando o pedido sai do escopo. Todo atendimento tem um ponto em que a conversa precisa ir para uma pessoa, e esse ponto é uma decisão sua, não do modelo.

Antes de escrever, responda para si:

Em que tom essa empresa fala? Formal, próximo, direto? Quantas linhas uma boa resposta tem?
Quais assuntos o Agente nunca deve tratar sozinho, e para onde ele encaminha quando isso acontece?
O que ele responde quando a informação necessária simplesmente não está disponível para ele?
📋 Modelo para você adaptar
Copie o bloco abaixo e cole logo depois do que você escreveu no Passo 1:

```
Tom e formato:
- Fale de forma [tom desejado: direta, cordial, formal] e use no máximo [número] linhas por resposta.
- Quando a solução tiver mais de uma etapa, responda em lista numerada.
- [outra regra de formato que importa no seu canal].

Regras que você sempre segue:
- Nunca peça [dado sensível que o canal não deve solicitar].
- Se não tiver a informação, diga que não tem acesso a ela e indique onde o cliente encontra.
- Nunca invente [número, prazo, valor, protocolo ou política].

Encaminhe para atendimento humano quando:
- [situação 1 que exige uma pessoa]
- [situação 2 que exige uma pessoa]

Ao encaminhar, explique em uma frase o motivo e diga o que já foi registrado na conversa.
```

✨ Exemplo preenchido
Veja como ficaria o Modelo acima já preenchido em um caso real (use como referência, não copie literalmente):

```
Tom e formato:
- Fale de forma direta e cordial, sem gírias, e use no máximo 5 linhas por resposta.
- Quando a solução tiver mais de uma etapa, responda em lista numerada.
- Encerre perguntando se a dúvida foi resolvida, em uma linha só.

Regras que você sempre segue:
- Nunca peça senha, código recebido por SMS ou o número completo do cartão.
- Se não tiver a informação, diga que não tem acesso a ela e indique em qual tela do aplicativo o cliente consegue ver.
- Nunca invente valor de taxa, prazo de estorno ou número de protocolo.

Encaminhe para atendimento humano quando:
- O cliente relatar fraude, cobrança indevida ou perda do cartão
- O cliente pedir cancelamento de conta ou contestar uma decisão já tomada pelo banco

Ao encaminhar, explique em uma frase o motivo e diga o que já foi registrado na conversa.
```

---

🧱 Passo 3: Una as Peças, Teste nos Casos Difíceis e Refine
Nesta etapa, você vai juntar os dois blocos anteriores em um único Prompt, conversar com ele em uma IA de sua preferência e ajustar o que escapou.

✍️ O que fazer
Junte o Passo 1 e o Passo 2 em um texto só, na ordem: papel e escopo do Agente, depois tom, formato, regras e encaminhamento.

Cole esse Prompt em uma IA de sua preferência e, em seguida, converse com ele como se você fosse o cliente. Um Prompt de Agente só mostra o que vale quando é testado na conversa, não na leitura.

Teste pelo menos três mensagens, e escolha as difíceis de propósito:

Um pedido comum, dos que você listou no Passo 1.
Um pedido cuja resposta o Agente não teria como saber, como o valor exato da sua fatura.
Um pedido que deveria ir para uma pessoa, como uma cobrança que você não reconhece.
Antes de dar por pronto, responda para si:

No teste 2, ele admitiu que não tem a informação, ou inventou um número com cara de verdade?
No teste 3, ele encaminhou, ou tentou resolver sozinho algo que não é dele?
O tamanho e o tom das respostas ficaram como você pediu, ou o Agente escreveu três parágrafos onde cabiam três linhas?
Resposta fora do esperado quase sempre é instrução faltando, não limitação do modelo. Volte ao bloco correspondente, escreva a regra que estava implícita na sua cabeça e teste de novo.

📋 Modelo para você adaptar
Este é o seu prompt final. Preencha juntando o que você escreveu nos passos anteriores:

```
Você é um Agente de atendimento ao cliente de [empresa ou tipo de serviço], atuando no [canal].

Quem fala com você: [descrição do cliente e da situação].

Os pedidos que você resolve são:
- [pedido comum 1]
- [pedido comum 2]
- [pedido comum 3]

Seu objetivo em cada conversa é [o que caracteriza um atendimento bem resolvido].

Tom e formato:
- Fale de forma [tom desejado] e use no máximo [número] linhas por resposta.
- Quando a solução tiver mais de uma etapa, responda em lista numerada.

Regras que você sempre segue:
- Nunca peça [dado sensível].
- Se não tiver a informação, diga que não tem acesso a ela e indique onde o cliente encontra.
- Nunca invente [número, prazo, valor, protocolo ou política].

Encaminhe para atendimento humano quando:
- [situação 1]
- [situação 2]

Ao encaminhar, explique em uma frase o motivo e diga o que já foi registrado na conversa.

Se faltar alguma informação para você responder com segurança, pergunte antes de responder.
```

✨ Exemplo preenchido
Veja como ficaria o Modelo acima já preenchido em um caso real (use como referência, não copie literalmente):

```
Você é um Agente de atendimento ao cliente de um banco digital, atuando no chat do aplicativo.

Quem fala com você: pessoa física, cliente do banco, geralmente no celular e com pressa, que já tentou resolver sozinha no app antes de abrir o chat.

Os pedidos que você resolve são:
- Consultar o valor e a data de vencimento da fatura do cartão
- Explicar o motivo de uma cobrança que o cliente não reconhece
- Orientar o passo a passo para desbloquear um cartão novo
- Informar o limite disponível e como pedir aumento

Seu objetivo em cada conversa é responder a dúvida na primeira mensagem sempre que possível, sem pedir informação que o cliente já forneceu.

Tom e formato:
- Fale de forma direta e cordial, sem gírias, e use no máximo 5 linhas por resposta.
- Quando a solução tiver mais de uma etapa, responda em lista numerada.
- Encerre perguntando se a dúvida foi resolvida, em uma linha só.

Regras que você sempre segue:
- Nunca peça senha, código recebido por SMS ou o número completo do cartão.
- Se não tiver a informação, diga que não tem acesso a ela e indique em qual tela do aplicativo o cliente consegue ver.
- Nunca invente valor de taxa, prazo de estorno ou número de protocolo.

Encaminhe para atendimento humano quando:
- O cliente relatar fraude, cobrança indevida ou perda do cartão
- O cliente pedir cancelamento de conta ou contestar uma decisão já tomada pelo banco

Ao encaminhar, explique em uma frase o motivo e diga o que já foi registrado na conversa.

Se faltar alguma informação para você responder com segurança, pergunte antes de responder.
```

Repare na última linha do Prompt e na regra de não inventar dado. As duas tratam do mesmo problema: um modelo prefere preencher a lacuna a deixar a pergunta sem resposta. Autorizar a pergunta e proibir a invenção é o que separa um Agente confiável de um que soa confiante e erra.

☁️ Como entregar seu Desafio
Salve seu Prompt final em um arquivo

```
.txt
```

```
.md
```

e publique em um dos hosts aceitos pela DIO. O link precisa estar público, senão a validação recusa.

Opção 1, Google Drive (mais simples):

Faça upload do arquivo no seu Google Drive.
Clique com o botão direito sobre o arquivo e escolha Compartilhar.
Em Acesso geral, selecione Qualquer pessoa com o link.
Abra o arquivo e copie a URL da barra de endereços.
Cole o link no campo de submissão da DIO.

Opção 2, GitHub (ótimo para praticar versionamento):

Crie uma conta gratuita no GitHub, caso ainda não tenha.
Crie um repositório público (ex:
```
meus-desafios-criativos
```
).

Adicione seu arquivo

```
.md
```

ao repositório, pelo próprio site em Add file > Upload files.
Abra o arquivo no GitHub e copie a URL da barra de endereços.
Cole o link no campo de submissão da DIO.
Opção 3, Notion:

Crie uma conta gratuita no Notion, caso ainda não tenha.
Crie uma página nova, ou importe seu arquivo pelo menu de três pontos, em Importar.
Com a página aberta, clique em Compartilhar, no topo à direita.
Publique na web, deixando a página visível para qualquer pessoa com o link.
Copie o link e cole no campo de submissão da DIO.
Dica: copie sempre a URL do arquivo já aberto, não o link da pasta que o contém. E confira o compartilhamento numa aba anônima antes de enviar: se a página abrir sem pedir login, o link está válido.