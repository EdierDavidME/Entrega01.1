let Cursos=[{
    id: 'c1',
    nombre: 'Lengua Materna',
    duracion: '80 horas',
    valor: '$1500000'
},
 {
    id: 'c2',
    nombre: 'Programaciòn',
    duracion: '85 horas',
    valor: '$1800000'
},
{
    id: 'c3',
    nombre: 'Base de datos',
    duracion: '58 horas',
    valor: '$1750000'
},
            {
    id: 'c4',
    nombre: 'Hardware y Redes',
    duracion: '85 horas',
    valor: '$1200000'
}];
module.exports= {Cursos};
    let Curso1=(nombre,duracion,valor)=>{
    setTimeout(function(){
    console.log('')
    console.log('Nombre del curso: '+nombre);
    console.log('Duracion: '+duracion);
    console.log('Valor: '+valor);
    console.log('id= c1')
               },000);
        }
    
    let Curso2 = (nombre,duracion,valor)=>{
    setTimeout(function(){
    console.log('');
    console.log('Nombre del curso: '+nombre);
    console.log('Duracion: '+duracion);
    console.log('Valor: '+valor);
    console.log('id=c2');
               },2000);
        }
    let Curso3 = (nombre,duracion,valor)=>{
    setTimeout(function(){
    console.log('');
    console.log('Nombre del curso: '+nombre);
    console.log('Duracion: '+duracion);
    console.log('Valor: '+valor);
    console.log('id=c3');
               },4000);
    }

    let Curso4=(nombre,duracion,valor)=>{
    setTimeout(function(){
    console.log('');
    console.log('Nombre del curso: '+nombre);
    console.log('Duracion: '+duracion);
    console.log('Valor: '+valor);
    console.log('id=c4');
               },6000);
        }
    
Curso1 ('Lengua Materna','80 horas','$1500000');
Curso2('Programaciòn','85 horas','$1800000');
Curso3('Base de datos','58 horas','$1800000');
Curso4('Hardware y Redes','85 horas','$1750000');