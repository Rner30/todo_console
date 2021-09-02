require('colors')

const mostrarMenu =  () => {
    return new Promise(resolve =>{
        console.clear()
        console.log('=========='.green);
        console.log('seleccione una opcion'.green);
        console.log('==========\n'.green);

        console.log(`${'1.'.green} Crear una tarea`);
        console.log(`2. Listar Tareas`);
        console.log(`3. Listar tareas pendientes`);
        console.log(`4. Listar Tareas pendientes`);
        console.log(`5. Completar tarea(s)`);
        console.log(`6. Borrar tarea`);
        console.log(`0. Salir \n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opcion: ', (opt)=>{
            console.log(opt);
            resolve(opt)
            readline.close()
        })
    })
    



}   
const pausa = () => {
    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Presione ${'Enter'.green} para continuar\n`, (opt)=>{
            readline.close()
            resolve()
        })
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}


