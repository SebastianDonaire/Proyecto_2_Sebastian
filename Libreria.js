let librosColeccion = [
    
    {
        nombre: "Cien años de soledad",
        cantidad_de_paginas: 471,
        Autor:"Gabriel Garcia Marquez",
        Genero: [
            "novela",
            "Realismo Magico"
            ],
        Disponible: "Si"
    },

    {
        nombre: "Don Quijote de la Mancha",
        cantidad_de_paginas: 462,
        Autor:"Miguel de Cervantes Saavedra",
        Genero: [
            "Novela de aventuras", 
            "parodia de las novelas de caballerías", 
            "novela realista"
            ],
        Disponible: "No"
    }
]

function informacionLibro (libro){
    let generos = libro.Genero.join(", ");
    let disponibilidad = libro.disponible ? "se encuentra disponible" : "no se encuentra disponible ";
    console.log(`El libro ${libro.nombre}, tiene ${libro.paginas} páginas, fue escrito por ${libro.autor} y es del género ${generos} y ${disponibilidad}.`);
}
librosColeccion.forEach(informacionLibro);

console.log(librosColeccion);

informacionLibro(librosColeccion[0])

function imprimirLibros (libro) {
    for (let i = 0 ; i < libro.legth; i++){
        informacionLibro(libro[i]);
    }
}
