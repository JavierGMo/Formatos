const express = require('express');
const app = express();
const pug = require('pug');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set("views", "public/views/");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// function construccionAPA(nombre, apellido, titulo, subtitulo, anio, numEditorial, nombreEdit, pais){
//     let formato = '';
//     if(checkData(nombre) && checkData(apellido) &&
//         checkData(titulo) && checkData(subtitulo) &&
//         checkData(anio) && checkData(numEditorial) &&
//         checkData(nombreEdit) && checkData(pais) ){
//         formato = `${apellido.toUpperCase()}, ${nombre[0]}. (${anio}) ${titulo}`;
//         if(subtitulo.trim() != "")
//             formato += `:${subtitulo}. ${pais}:${nombreEdit}`;
//         else
//             formato += `. ${pais}:${nombreEdit}`;
//     }
//     return formato;
// }
// function checkData(data){
//     if(data != null && data != undefined && data.trim() != '')
//         return false;
//     else
//         return true;
// }
app.get('/', (req, res)=>{
    res.render('index', {
        titulo: 'Inicio',
    });
});


module.exports = app;