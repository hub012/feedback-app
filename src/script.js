const persona = {
    nombre: 'Delvin',
    apellido: 'Martinez',
    edad: 32,
    sexo: 'Masculino'
}

const imprimeDatos = (nombre, edad)=> {
    console.log(nombre)
    console.log(edad)    
}
const{nombre, edad} = persona
imprimeDatos(nombre, edad)