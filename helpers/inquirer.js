const inquire = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
require("colors");

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message : 'Que quiere hacer?',
        choices: [
            {
                value: '1',
                
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar Tareas Compleatadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
]

const inquireMenu = async () => {
	console.clear();
	console.log("==========".green);
	console.log("seleccione una opcion".white);
	console.log("==========\n".green);

    const {opcion} = await inquire.prompt(preguntas)
    return opcion
};

const pausa = async () => {
    const question =[
        {
            type: 'input',
            name:'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]
    console.log('\n');
    await inquire.prompt(question)
}
const leerInput = async (mensaje) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,
            validate(value){
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]
    const {desc}  = await inquire.prompt(question)
    return desc
}
const listadoTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, i) =>{
        const idx = `${i+1}`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })
    choices.unshift({
        value: '0',
        name: '0. Cancelar' 
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const {id} = await inquire.prompt(preguntas)
    return id
}
const confirmar = async (msg) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message: msg
        }

    ] 
    const {ok} = await inquire.prompt(question)
    return ok
}
const MostrarListadoCheckListo = async (tareas = []) => {
    const choices = tareas.map((tarea, i) =>{
        const idx = `${i+1}`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false
        }
    })
    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]
    const {ids} = await inquire.prompt(preguntas)
    
    return ids
}
module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    MostrarListadoCheckListo
}
