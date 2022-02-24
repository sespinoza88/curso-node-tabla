const { crearArchivoTabla } = require('./Helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

console.log(`La base de yargs es: ${ argv.base }`);
console.log(`Hasta de yargs es: ${ argv.hasta }`);
console.log(`Listar de yargs es: ${ argv.listar }`);

crearArchivoTabla( argv.base, argv.hasta, argv.listar )
.then( nombreArchivo =>  console.log(nombreArchivo, 'creado.'))
.catch( err => console.log('Error', err) );