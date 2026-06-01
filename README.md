# Orion Monitor — Missão Aurora-X

Plataforma web interativa para monitoramento de missão espacial experimental fictícia.
Desenvolvida para a Global Solution GS2026.1 — Application Development — FIAP.

---

## Descrição

O **Orion Monitor** simula o painel de controle da **Missão Aurora-X**, uma missão orbital experimental da nave **AX-7 Helios** a 420 km de altitude. A plataforma exibe dados de telemetria simulados, permite registrar ocorrências operacionais e oferece interações dinâmicas com o usuário.

---

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 (Flexbox, Box Model, Media Queries, variáveis CSS)
- JavaScript puro (manipulação de DOM, eventos, atualização dinâmica)

Nenhum framework ou biblioteca externa foi utilizado.

---

## Funcionalidades

- Dashboard de telemetria com 8 cards de dados simulados
- Atualização dinâmica dos dados ao clicar em "Atualizar Dados"
- Status operacional com três níveis: Operacional, Atenção e Crítico
- Alternância entre tema escuro e tema claro
- Exibição e ocultação dos detalhes da missão
- Relógio em tempo real no cabeçalho
- Log de eventos com registro das ações do sistema
- Formulário de cadastro de ocorrências com validação
- Mensagem de confirmação após envio do formulário
- Layout responsivo com Flexbox e Media Queries (desktop, tablet e celular)

---

## Estrutura do projeto

```
missao-espacial-monitoramento/
│
├── index.html          → estrutura principal da aplicação
├── README.md           → documentação do projeto
├── integrantes.txt     → nomes e RMs do grupo
│
├── css/
│   └── style.css       → toda a estilização visual
│
├── js/
│   └── script.js       → toda a interatividade
│
└── assets/
    └── imagens/        → pasta reservada para imagens
```

---

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` diretamente no navegador.
3. Nenhuma instalação ou servidor é necessário.

---

## Roteiro do Vídeo Pitch (~1 minuto)

---

Olá, meu nome é [NOME] e este projeto se chama **Orion Monitor**.

Ele foi desenvolvido como uma plataforma web interativa para monitoramento da missão espacial fictícia **Aurora-X**.

O objetivo da aplicação é simular o acompanhamento operacional de uma nave experimental chamada AX-7 Helios, exibindo dados como temperatura, energia, comunicação, sensores ativos, oxigênio e status da missão.

A estrutura foi feita com **HTML semântico**, utilizando `header`, `main`, `section`, `article`, `aside` e `footer`. A estilização foi desenvolvida em **CSS puro**, com Flexbox, responsividade por Media Queries, cards visuais com box model e um tema inspirado na indústria espacial com cores escuras, azul e roxo.

No **JavaScript**, foram implementadas interações como atualização dinâmica dos dados da missão com valores aleatórios, mudança de tema entre escuro e claro, exibição e ocultação de detalhes da missão, relógio em tempo real, log de eventos e envio do formulário sem recarregar a página.

Também existe um **formulário de cadastro de ocorrências**, com inputs, labels, selects, textarea e botão submit, onde o operador pode registrar eventos relacionados à missão com validação dos campos obrigatórios.

O projeto foi desenvolvido utilizando **apenas HTML, CSS e JavaScript puro**, aplicando os conceitos trabalhados ao longo do semestre na disciplina de Application Development da FIAP.

Muito obrigado!

---

## Integrantes

Preencha o arquivo `integrantes.txt` com os dados do grupo.
