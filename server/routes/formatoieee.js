const express = require('express');
const app = express();
const pug = require('pug');
const bodyParser = require('body-parser');
const {Formatos} = require('../classes/Formatos');

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
app.get('/formatoiee', (req, res)=>{
    const formato = new Formatos();
    let nombreAutorB = req.query.nombreAutor || '';
    let apellidoAutorB = req.query.apellidoAutor || '';
    let titutloLibroB = req.query.titutloLibro || '';
    let subtitutloLibroB = req.query.subtitutloLibro || '';
    let anioPublicacionB = req.query.anioPublicacion || '';
    let nombreEditorialB = req.query.nombreEditorial || '';
    let numeroEdicionB = req.query.numeroEdicion || '';
    let paisPublicacionB = req.query.paisPublicacion || '';
    res.render('formatoieee', {
        titulo: 'Inicio',
        referenciaAPA: formato.construccionAPA(nombreAutorB, apellidoAutorB, titutloLibroB, subtitutloLibroB, anioPublicacionB, numeroEdicionB, nombreEditorialB, paisPublicacionB) || ''
    });
});


module.exports = app;