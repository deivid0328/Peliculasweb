const peliculas = [
    {
        id: 1,
        img: "./assets/img/card/peli1.jpg",
        altimg: "doctor strange",
        name: "Doctor Strange en el Multiverso de la Locura",
        title: "Doctor Strange in the Multiverse of Madness",
        estreno: "05-May-2022",
        genero: "Acción, Aventura"
    },
    {
        id: 2,
        img: "./assets/img/card/peli2.jpg",
        altimg: "el peso del talento",
        name: "El Peso del Talento",
        title: "The Unbearable Weight Of Massive Talent",
        estreno: "12-May-2022",
        genero: "Acción, Comedia"
    },
    {
        id: 3,
        img: "./assets/img/card/peli3.jpg",
        altimg: "llamas de venganza",
        name: "Llamas de Venganza",
        title: "Firestarter",
        estreno: "12-May-2022",
        genero: "Suspenso, Terror"
    },
    {
        id: 4,
        img: "./assets/img/card/peli4.jpg",
        altimg: "sonic 2",
        name: "Sonic 2",
        title: "Sonic the Hedgehog 2",
        estreno: "07-Abr-2022",
        genero: "Acción, Aventura"
    }
]
const contenedor = document.getElementById("contenedor");
    peliculas.map((pelicula) => {

    const card = document.createElement("div");
    card.setAttribute('class', 'card__contenedor');
    contenedor.appendChild(card);

    const cardimg = document.createElement("div")
    cardimg.setAttribute('class', 'card__img');
    card.appendChild(cardimg);

    const imagen = document.createElement("img");
    imagen.setAttribute('src', pelicula.img);
    cardimg.appendChild(imagen);

    const carddescrip = document.createElement("div");
    carddescrip.setAttribute('class', 'card_descripcion');
    card.appendChild(carddescrip);

    const titulo = document.createElement("h3");
    titulo.textContent=pelicula.name;
    carddescrip.appendChild(titulo);

    const ingles= document.createElement("span");
    ingles.innerHTML=`<span><b>Titulo en ingles: </b>${pelicula.title}</span>`   
    carddescrip.appendChild(ingles);

    const estreno= document.createElement("span");
    estreno.innerHTML=`<span><b>Estreno: </b>${pelicula.estreno}</span>`   
    carddescrip.appendChild(estreno);

    const genero= document.createElement("span");
    genero.innerHTML=`<span><b>Género: </b>${pelicula.genero}</span>`   
    carddescrip.appendChild(genero);

})


