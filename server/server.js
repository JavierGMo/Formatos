const express = require('express');
const app = express();
const path = require('path');


let port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(require('./routes/index'));


app.listen(port, (err)=>{
    if(err) throw new Error(err);
    console.log(`Servidor corriendo en el puerto ${port}`);
});