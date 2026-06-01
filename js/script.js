// =============================================
// ORION MONITOR — MISSÃO AURORA-X
// Interatividade e manipulação do DOM
// =============================================

// === REFERÊNCIAS AOS ELEMENTOS DO DOM ===
const btnTema = document.getElementById('btn-tema');
const btnAtualizar = document.getElementById('btn-atualizar');
const btnDetalhes = document.getElementById('btn-detalhes');
const detalhesMissao = document.getElementById('detalhes-missao');
const formOcorrencia = document.getElementById('form-ocorrencia');
const msgConfirmacao = document.getElementById('msg-confirmacao');
const btnLimpar = document.getElementById('btn-limpar');
const statusTexto = document.getElementById('status-texto');
const ultimaSync = document.getElementById('ultima-sync');
const ultimoEvento = document.getElementById('ultimo-evento');

// === RELÓGIO — exibe a hora ao carregar a página ===
function mostrarHora() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    document.getElementById('relogio').innerText = horas + ':' + minutos + ':' + segundos;
}

mostrarHora();

// === ALTERNÂNCIA DE TEMA (ESCURO / CLARO) ===
btnTema.addEventListener('click', function() {
    document.body.classList.toggle('tema-claro');
    document.body.classList.toggle('tema-escuro');

    if (document.body.classList.contains('tema-claro')) {
        btnTema.innerText = '🌙 Tema Escuro';
        ultimoEvento.innerText = 'Tema claro ativado.';
    } else {
        btnTema.innerText = '☀️ Tema Claro';
        ultimoEvento.innerText = 'Tema escuro ativado.';
    }
});

// === EXIBIR / OCULTAR DETALHES DA MISSÃO ===
btnDetalhes.addEventListener('click', function() {
    if (detalhesMissao.classList.contains('oculto')) {
        detalhesMissao.classList.remove('oculto');
        btnDetalhes.innerText = '🔼 Ocultar Detalhes';
        ultimoEvento.innerText = 'Detalhes da missão exibidos.';
    } else {
        detalhesMissao.classList.add('oculto');
        btnDetalhes.innerText = '📋 Ver Detalhes da Missão';
        ultimoEvento.innerText = 'Detalhes da missão ocultados.';
    }
});

// === FUNÇÃO: NÚMERO ALEATÓRIO ===
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// === ATUALIZAR DADOS DO DASHBOARD ===
function atualizarDados() {
    // Temperatura: entre -10°C e 45°C
    const temp = aleatorio(-10, 45);
    document.getElementById('val-temperatura').innerText = temp + '°C';
    document.getElementById('bar-temperatura').style.width = Math.round(((temp + 10) / 55) * 100) + '%';

    // Energia: entre 20% e 100%
    const energia = aleatorio(20, 100);
    document.getElementById('val-energia').innerText = energia + '%';
    document.getElementById('bar-energia').style.width = energia + '%';

    // Oxigênio: entre 60% e 100%
    const oxigenio = aleatorio(60, 100);
    document.getElementById('val-oxigenio').innerText = oxigenio + '%';
    document.getElementById('bar-oxigenio').style.width = oxigenio + '%';

    // Sensores: entre 8 e 12 ativos
    const sensores = aleatorio(8, 12);
    document.getElementById('val-sensores').innerText = sensores + ' / 12';

    // Comunicação
    const sinal = aleatorio(40, 99);
    document.getElementById('val-comunicacao').innerText = 'Estável';
    document.getElementById('sub-comunicacao').innerText = 'Sinal: ' + sinal + '%';

    // Velocidade orbital
    const vel = 27580 + aleatorio(-50, 50);
    document.getElementById('val-velocidade').innerText = vel + ' km/h';

    // Hora da última sincronização
    const agora = new Date();
    let h = agora.getHours();
    let m = agora.getMinutes();
    if (h < 10) { h = '0' + h; }
    if (m < 10) { m = '0' + m; }
    ultimaSync.innerText = h + ':' + m;

    // Atualizar status geral com base nos dados
    if (temp > 40 || energia < 25 || oxigenio < 65 || sensores < 9) {
        statusTexto.innerText = '● CRÍTICO';
        statusTexto.className = 'status-critico';
        ultimoEvento.innerText = 'Status crítico detectado! Verificação necessária.';
    } else if (temp > 32 || energia < 50 || oxigenio < 80 || sensores < 11) {
        statusTexto.innerText = '● ATENÇÃO';
        statusTexto.className = 'status-atencao';
        ultimoEvento.innerText = 'Alerta: sistema em atenção.';
    } else {
        statusTexto.innerText = '● OPERACIONAL';
        statusTexto.className = 'status-operacional';
        ultimoEvento.innerText = 'Dados atualizados com sucesso.';
    }
}

// Evento do botão "Atualizar Dados"
btnAtualizar.addEventListener('click', atualizarDados);

// === FORMULÁRIO DE OCORRÊNCIAS ===
formOcorrencia.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nomeOperador = document.getElementById('nome-operador');
    const setor = document.getElementById('setor');
    const tipoOcorrencia = document.getElementById('tipo-ocorrencia');
    const prioridade = document.getElementById('prioridade');
    const descricao = document.getElementById('descricao');

    let valido = true;

    // Validação: destaca campos vazios em vermelho
    if (!nomeOperador.value.trim()) {
        nomeOperador.style.borderColor = '#ef4444';
        valido = false;
    } else {
        nomeOperador.style.borderColor = '';
    }

    if (!setor.value) {
        setor.style.borderColor = '#ef4444';
        valido = false;
    } else {
        setor.style.borderColor = '';
    }

    if (!tipoOcorrencia.value) {
        tipoOcorrencia.style.borderColor = '#ef4444';
        valido = false;
    } else {
        tipoOcorrencia.style.borderColor = '';
    }

    if (!prioridade.value) {
        prioridade.style.borderColor = '#ef4444';
        valido = false;
    } else {
        prioridade.style.borderColor = '';
    }

    if (!descricao.value.trim()) {
        descricao.style.borderColor = '#ef4444';
        valido = false;
    } else {
        descricao.style.borderColor = '';
    }

    if (!valido) {
        ultimoEvento.innerText = 'Preencha todos os campos obrigatórios.';
        return;
    }

    // Exibe mensagem de confirmação e registra no log
    msgConfirmacao.classList.remove('oculto');
    ultimoEvento.innerText = 'Ocorrência registrada por ' + nomeOperador.value + '.';
    formOcorrencia.reset();
});

// === LIMPAR FORMULÁRIO ===
btnLimpar.addEventListener('click', function() {
    formOcorrencia.reset();

    // Remove destaques de erro
    document.getElementById('nome-operador').style.borderColor = '';
    document.getElementById('setor').style.borderColor = '';
    document.getElementById('tipo-ocorrencia').style.borderColor = '';
    document.getElementById('prioridade').style.borderColor = '';
    document.getElementById('descricao').style.borderColor = '';

    ultimoEvento.innerText = 'Formulário limpo pelo operador.';
});
