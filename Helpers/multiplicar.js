const fs = require('fs');

const crearArchivoTabla = async ( base = 5, hasta = 10 , listar = false ) => {
    try {
        
        let output = '';
        
        for (let index = 1; index <= hasta; index++) {
            output += `${ base } x ${ index } = ${ base * index }\n`;
        }
        
        if (listar) {
            console.log('=================');
            console.log('    Tabla del: ', base);
            console.log('=================');
            console.log(output);
        } 
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, output);
        
        return `tabla-${ base }.txt`;
        
    } catch (error) {
        throw `Ha ocurrido un error al guardar el archivo tabla-${ base }.txt Error: ${ error }`;
    }    
}

module.exports = { crearArchivoTabla }