const info = require('./cursos');
const fs = require('fs');
const datos={
    curso:{
        demand:true,
        alias: 'c'
    },
    nombre:{
        demand:true,
        alias: 'n'
    },
    documento:{
        demand: true,
        alias: 'd'
    }
}
let argv = require('yargs')
    .command('inscribir','Llena los siguientes datos',datos)
    .argv
id= ('c1','c2','c3','c4');
let cursoEs=info.Cursos.find(function(cursoE){
        if(cursoE==undefined){
            return cursoEs.id='no encontrado'
}else{
    return cursoE.id==argv.c
}
})
if(argv.nombre){
setTimeout(function(){
let crearArchivo = (info) => {
    texto = 'Registrado: '+argv.n+ '\n'+
            'Documento: '+argv.d+'\n'+
            'Curso: '+cursoEs.nombre+'\n'+
            'Duracion: '+cursoEs.duracion+'\n'+
            'valor: '+cursoEs.valor
        fs.writeFile('Register.txt', texto,(err)=>{
            if(err) throw (err);
            console.log('');
            console.log('*Datos* '+'\n'+
            texto);
        });
};
crearArchivo(info);
},8000);
}