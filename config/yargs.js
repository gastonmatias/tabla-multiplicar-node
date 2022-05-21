/* para manejo con yargs */
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Es la base de la multiplicación (multiplicador)'
                })
                .check((argv,options) => {
                    /* valida que el argumento sea un numero */
                    if (isNaN(argv.b)) {
                        throw 'la base debe ser un numero '
                    }
                    /* si no hay ningun error simplemente
                    retorna el true */
                    return true;
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Imprime la tabla creada en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Numero de Multiplicandos'
                })
                .argv
            
/*  para exportar */
module.exports = argv;