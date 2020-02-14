class Formatos{
    constructor(){
        this.nombre = '';
        this.apellido = '';
        this.titulo = '';this.subtitulo = ''; 
        this.anio = '';
        this.numEditorial = '';
        this.nombreEdit = '';
        this.pais = '';
    }
    construccionAPA(nombre, apellido, titulo, subtitulo, anio, numEditorial, nombreEdit, pais){
        let formato = '';
        
        if(this.checkData(nombre) && this.checkData(apellido) &&
            this.checkData(titulo) && this.checkData(subtitulo) &&
            this.checkData(anio) && this.checkData(numEditorial) &&
            this.checkData(nombreEdit) && this.checkData(pais) ){
            formato = `${apellido.toUpperCase()}, ${nombre[0].toUpperCase()}. (${anio}) ${titulo}`;
            if(subtitulo.trim() != "")
                formato += `:${subtitulo}. ${pais}:${nombreEdit}`;
            else
                formato += `. ${pais}:${nombreEdit}`;
        }else{
            formato = '';
        }
        console.log(formato);
        return formato;
    }
    checkData(data){
        if(data != null && data != undefined && data.trim() != '')
            return true;
        else
            return false;
    }
}

module.exports = {
    Formatos
};