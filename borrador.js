/*  Ejecutar un archivo por konsole y g
uardar un docu txt con la tabla de multiplicar indicada
en filesystem */

/* FAQ:
Abrir konsole en 03-bases-node y
    $ node borrador --base=x
donde x: numero cualquiera
*/

const {crearArchivo} = require('./helpers/multiplicar')

console.clear()

// capturar un argumento pasado x consola
const [,,arg3='base=5'] = process.argv
const [, base=5] = arg3.split('=')
console.log(process.argv)

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,' creado'))
    .catch(err => console.log(err))

