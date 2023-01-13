export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    imgpro?: string;
    url_imagen: string;


    constructor(nombre: string, descripcion: string, imgpro: string, url_imagen: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imgpro = imgpro;
        this.url_imagen = url_imagen;
    }


}
