async function obterCotacao() {
    try{
        const resultado = await fetch ('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
        const dados = await resultado.json();

        //Atualiza os valores na interface
        document.getElementById('dolar').innerText =`R$ ${parseFloat(dados.USDBRL.bid).toFixed(2)}`;
        document.getElementById('euro').innerText =`R$ ${parseFloat(dados.EURBRL.bid).toFixed(2)}`;

        //Formata data e hora
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = dataAtual.toLocaleString('pt-br', {month: "short"});
        const hora = dataAtual.toLocaleTimeString('pt-br', {timeZone: 'America/Sao_Paulo'});

        document.getElementById('date1').innerText = `${dia} de ${mes}, ${hora} BR`;
        document.getElementById('date2').innerText = `${dia} de ${mes}, ${hora} BR`;
    }
    catch (erro) {
        console.error('Erro ao buscar cotações:', erro);
        document.getElementById('dolar').innerText = "ERRO interno na API"
        document.getElementById('euro').innerText = "ERRO interno na API"

    }   
}

obterCotacao();

setInterval(obterCotacao, 30000);