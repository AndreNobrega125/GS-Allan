# Orion Monitor — Missão Aurora-X

Plataforma web interativa para monitoramento de missão espacial experimental fictícia.
Desenvolvida para a Global Solution GS2026.1 — Application Development — FIAP.

---

## Integrantes:

| Nome | RM |
|------|----|
| *(André Ayello de Nobrega)* | *(RM561754)* |
| *(André Gouveia de Lima)* | *(RM564219)* |
| *(Mirella Mascarenhas)* | *(RM562092)* |

---

## Descrição

O **Orion Monitor** simula o painel de controle da **Missão Aurora-X**, uma missão orbital experimental da nave **AX-7 Helios** a 420 km de altitude. A plataforma exibe dados de telemetria simulados, permite registrar ocorrências operacionais e oferece interações dinâmicas com o usuário.

---

Link do video: https://www.youtube.com/watch?v=3O3S149JdmA

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
