const diasDaSemana = require('../arraySemana/index');

// FUNÇÃO QUE RETORNA DIA DA SEMANA, DE ACORDO COM A QUANTIA DE DIAS QUE SERÃO PERCORRIDOS
const diaDaSemana = async (req, res) => {
    const { startDay, amountOfDays } = req.query;
    
    try {
        const diaInicial = diasDaSemana.indexOf(startDay);

        const diaFinal = (diaInicial + Number(amountOfDays)) % 7;

        return res.status(200).json(diasDaSemana[diaFinal]);
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = diaDaSemana;