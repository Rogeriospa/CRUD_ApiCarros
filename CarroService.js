const { buscarTodos } = require('../controllers/CarroController');
const db = require('../db');

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SEECT * FROM carros', (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};