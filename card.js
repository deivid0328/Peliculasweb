const peliculas = [
    {
        id: 1,
        img: "./assets/img/card/peli1.jpg",
        altimg: "doctor strange",
        name: "Doctor Strange en el Multiverso de la Locura",
        title: "Doctor Strange in the Multiverse of Madness",
        estreno: "05-May-2022",
        genero: "Acción, Aventura",
        resumen:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident animi illo possimus, magnam, commodi earum voluptate ad expedita consequuntur nam eaque quibusdam nihil quos vitae minus quas itaque nemo minima?"
    },
    {
        id: 2,
        img: "./assets/img/card/peli2.jpg",
        altimg: "el peso del talento",
        name: "El Peso del Talento",
        title: "The Unbearable Weight Of Massive Talent",
        estreno: "12-May-2022",
        genero: "Acción, Comedia",
        resumen:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident animi illo possimus, magnam, commodi earum voluptate ad expedita consequuntur nam eaque quibusdam nihil quos vitae minus quas itaque nemo minima?"
    },
    {
        id: 3,
        img: "./assets/img/card/peli3.jpg",
        altimg: "llamas de venganza",
        name: "Llamas de Venganza",
        title: "Firestarter",
        estreno: "12-May-2022",
        genero: "Suspenso, Terror",
        resumen:"Loremt tipsum dolor sit amet, consectetur adipisicing elit. Provident animi illo possimus, magnam, commodi earum voluptate ad expedita consequuntur nam eaque quibusdam nihil quos vitae minus quas itaque nemo minima?"
    },
    {
        id: 4,
        img: "./assets/img/card/peli4.jpg",
        altimg: "sonic 2",
        name: "Sonic 2",
        title: "Sonic the Hedgehog 2",
        estreno: "07-Abr-2022",
        genero: "Acción, Aventura",
        resumen:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident animi illo possimus, magnam, commodi earum voluptate ad expedita consequuntur nam eaque quibusdam nihil quos vitae minus quas itaque nemo minima?"
    }
]
const contenedor = document.getElementById("contenedor");
const fragment= document.createDocumentFragment();

    peliculas.map((pelicula) => {
       
        const card = document.createElement("div");
        card.onclick = function(){
            if (pelicula.id == pelicula.id){
               
                const ventana=document.getElementById("ventana")
                const popup = document.createElement('div')
                popup.setAttribute('class','popup')
                ventana.appendChild(popup)

                const popup__contenedor=document.createElement("div")
                popup__contenedor.setAttribute('class', 'popup__contenedor')
                popup.appendChild(popup__contenedor)

                const popup__info=document.createElement("div")
                popup__info.setAttribute('class','popup__info')
                popup__contenedor.appendChild(popup__info)

                const popup__img=document.createElement("div")
                popup__img.setAttribute('class', 'popup__img')
                popup__info.appendChild(popup__img)

                const img =document.createElement("img")
                img.setAttribute('src', pelicula.img);
                popup__img.appendChild(img)


                const popup__descripcion= document.createElement('div')
                popup__descripcion.setAttribute('class','popup__descripcion')
                popup__info.appendChild(popup__descripcion)

                const titulo = document.createElement("h3");
                titulo.textContent=pelicula.name;
                popup__descripcion.appendChild(titulo);

                const ingles= document.createElement("span");
                ingles.innerHTML=`<span><b>Titulo en ingles: </b>${pelicula.title}</span>`   
                popup__descripcion.appendChild(ingles);

                const estreno= document.createElement("span");
                estreno.innerHTML=`<span><b>Estreno: </b>${pelicula.estreno}</span>`   
                popup__descripcion.appendChild(estreno);

                const genero= document.createElement("span");
                genero.innerHTML=`<span><b>Género: </b>${pelicula.genero}</span>`   
                popup__descripcion.appendChild(genero);
    
                const popup__sinopsis = document.createElement("div")
                popup__sinopsis.setAttribute('class', 'popup__sinopsis')
                popup__contenedor.appendChild(popup__sinopsis)

                const sinopsis = document.createElement("h2")
                sinopsis.textContent="Sinopsis"
                popup__sinopsis.appendChild(sinopsis)

                const parrafo=document.createElement("p")
                parrafo.textContent=pelicula.resumen;
                popup__sinopsis.appendChild(parrafo)

               
                const cerrar = document.createElement('div')
                cerrar.setAttribute('class', 'cerrar')
                ventana.appendChild(cerrar)

                const icon =document.createElement("img")
                icon.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png');
                cerrar.appendChild(icon)
                     
                cerrar.onclick = function(){
                    const lose=document.getElementById("ventana")
                    lose.style.display = 'none';
                }
            



            }
        }
       
      

    card.setAttribute('id', pelicula.id);
    card.setAttribute('class', 'card__contenedor');
   
    fragment.appendChild(card);

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

contenedor.appendChild(fragment)

