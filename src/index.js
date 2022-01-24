//instalo la dependencia collect para poder usar el metodo count()
const collect = require('collect.js');
const fetchData = require('../src/utlils/fetchData');
const API = "https://www.freetogame.com/api/games/";

fetchData(API)
//contar juegos disponibles con count()
.then(data => {
    countData = collect(data);
    countGame = countData.count();
    console.log('Titulos disponibles:' + ' ' + countGame);
    return fetchData(`${API}`);
})
//id y nombre del primer titulo disponible
.then(data => {
    console.log([
        data[0].id,
        data[0].title,
        data[0].platform
    ]);
})
.catch(err => console.error(err));
