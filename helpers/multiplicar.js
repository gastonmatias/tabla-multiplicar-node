const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5,listar=false,hasta=10) => {

    try {
        let salida = ''
        let consola = ''
    
        for(let i=1; i<=hasta; i++){
           salida += `${base} x ${i} = ${base*i}\n`
           consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`
        }
        
        /* imprime la tabla SOLO si el usuario agrega el
        parametro -l en consola */
        if (listar) {
            console.log('==================================='.green)
            console.log('         Tabla del:'.green,colors.bold.underline(base))
            console.log('==================================='.green)
            console.log(consola)
        }
    
        fs.writeFileSync(`./salida/tabla-${base }.txt`,salida)
        
        return (`tabla-${base}.txt creado!`)
        
    } catch (err) {
        throw err
    }
   
}
//console.log('h3llo fri3nd')

/* exportar un objeto que contenga la funcion */
module.exports ={
    crearArchivo
}