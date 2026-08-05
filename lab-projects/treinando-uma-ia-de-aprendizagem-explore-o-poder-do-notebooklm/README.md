# Miniguia de Estudos - Next.js com NotebookLM

> Projeto desenvolvido como desafio da DIO utilizando o Google NotebookLM para organizar estudos, criar resumos inteligentes e documentar todo o processo de aprendizagem.

---

# Objetivo

O objetivo deste projeto é construir um caderno temático utilizando o NotebookLM para aprofundar conhecimentos sobre o framework Next.js, explorando seus recursos modernos e registrando todo o processo de estudo.

Além do aprendizado técnico, este projeto demonstra como utilizar Inteligência Artificial de forma estratégica para:

- organizar conhecimento;
- criar resumos;
- gerar explicações;
- validar entendimento;
- produzir material de revisão.

---

# Assunto Escolhido

**Programação com Next.js**

O foco principal dos estudos foi compreender:

- Estrutura do App Router
- Server Components
- Client Components
- Server Actions
- Data Fetching
- Renderização (SSR, SSG, ISR e CSR)
- Rotas Dinâmicas
- Layouts
- Metadata API
- Otimização de Performance
- Deploy na Vercel

---

# Curadoria de Fontes

As seguintes fontes foram utilizadas no NotebookLM:

## 1. Documentação Oficial Next.js

https://nextjs.org/docs

---

## 2. Learn Next.js

https://nextjs.org/learn

---

## 3. React Documentation

https://react.dev

---

## 4. Vercel Documentation

https://vercel.com/docs

---

## 5. TypeScript Handbook

https://www.typescriptlang.org/docs/

---

# Engenharia de Prompts

## Prompt 1

Explique a arquitetura do App Router do Next.js como se estivesse ensinando um desenvolvedor React que nunca utilizou Next.js.

### Resultado

Recebi uma explicação clara sobre:

- layouts
- pages
- loading
- error
- route groups

### Aprendizado

Percebi que o App Router organiza melhor aplicações grandes.

---

## Prompt 2

Compare App Router e Pages Router mostrando vantagens e desvantagens.

### Resultado

Obtive uma tabela comparativa.

### Dificuldade

Inicialmente a IA misturava conceitos antigos do Pages Router.

### Solução

Refinei o prompt:

"Considere apenas o Next.js 15 utilizando App Router."

---

## Prompt 3

Explique detalhadamente Server Components.

### Resultado

A IA explicou:

- execução no servidor
- redução do bundle
- acesso direto ao banco
- ausência de useState

---

## Prompt 4

Quando utilizar Client Components?

### Resultado

Foi gerada uma lista de casos:

- eventos
- estados
- useEffect
- animações
- bibliotecas que dependem do navegador

---

## Prompt 5

Explique todas as formas de renderização do Next.js.

### Resultado

Resumo contendo:

- SSR
- SSG
- ISR
- CSR

com exemplos.

---

## Prompt 6

Crie um roadmap para me tornar desenvolvedor Next.js Pleno.

### Resultado

A IA organizou um plano dividido em etapas.

---

# Cicatrizes (Troubleshooting)

## Problema

A IA respondia utilizando versões antigas do Next.js.

### Solução

Passei a incluir sempre:

"Considere apenas Next.js 15 utilizando App Router."

---

## Problema

Respostas muito superficiais.

### Solução

Passei a solicitar:

"Explique como um especialista faria."

---

## Problema

Respostas muito longas.

### Solução

Solicitei:

"Resuma em tópicos objetivos."

---

# Miniguia de Estudos

## 1. O que é o Next.js?

Framework React criado pela Vercel que fornece renderização híbrida, roteamento baseado em arquivos, otimização automática e diversos recursos para aplicações web modernas.

---

## 2. Estrutura do Projeto

```
app/
components/
public/
lib/
hooks/
services/
middleware.ts
next.config.ts
```

---

## 3. Server Components

Características:

- executam no servidor
- menor bundle
- acesso ao banco
- maior performance

Quando utilizar:

- páginas
- consultas
- dashboards
- SEO

---

## 4. Client Components

Necessários para:

- useState
- useEffect
- eventos
- formulários
- animações

Utilizam:

```
"use client"
```

---

## 5. Formas de Renderização

### SSR

Renderiza a cada requisição.

Ideal para:

- dashboards
- dados atualizados

---

### SSG

Gera páginas durante o build.

Ideal para:

- blogs
- documentação

---

### ISR

Atualiza páginas sem novo build.

Ideal para:

- e-commerce
- notícias

---

### CSR

Renderiza no navegador.

Ideal para:

- aplicações altamente interativas.

---

## 6. Data Fetching

Principais recursos:

- fetch()
- cache
- revalidate
- no-store

---

## 7. Server Actions

Permitem executar lógica diretamente no servidor sem criar APIs REST.

Vantagens:

- menos código
- maior segurança
- integração com formulários

---

## 8. Metadata API

Permite configurar:

- title
- description
- Open Graph
- Twitter Cards

melhorando SEO.

---

## 9. Deploy

A melhor plataforma é a Vercel.

Processo:

GitHub → Vercel → Deploy automático.

---

# 📖 Glossário

| Conceito | Definição |
|----------|-----------|
| App Router | Novo sistema de rotas do Next.js |
| Layout | Estrutura compartilhada entre páginas |
| Page | Página da aplicação |
| Server Component | Componente renderizado no servidor |
| Client Component | Componente executado no navegador |
| Server Action | Função executada no servidor |
| Hydration | Processo de ativar componentes React no navegador |
| Middleware | Código executado antes da requisição chegar à rota |
| ISR | Incremental Static Regeneration |
| SSR | Server Side Rendering |
| CSR | Client Side Rendering |
| SSG | Static Site Generation |
| Metadata API | API para SEO |
| Route Handler | Endpoint criado dentro do App Router |

---

# 🚀 Prompts Reutilizáveis

## Explicação

Explique o conceito de [tema] utilizando exemplos práticos em Next.js 15.

---

## Comparação

Compare [tecnologia A] e [tecnologia B] mostrando vantagens, desvantagens e quando utilizar.

---

## Roadmap

Monte um roadmap para dominar [tema] em nível pleno.

---

## Revisão

Faça um resumo em tópicos sobre [tema].

---

## Flashcards

Crie 20 perguntas e respostas sobre [tema].

---

## Entrevista

Quais perguntas técnicas um recrutador faria sobre [tema]?

---

# Conclusão

O NotebookLM mostrou-se uma excelente ferramenta para organizar estudos técnicos, permitindo consolidar conhecimento a partir de múltiplas fontes confiáveis.

Durante este projeto foi possível compreender os principais recursos do Next.js moderno, além de desenvolver habilidades em engenharia de prompts e curadoria de conteúdo, competências cada vez mais valorizadas no mercado de tecnologia.

---

## Autor

Erickson Tavares

Projeto desenvolvido para o desafio da DIO.