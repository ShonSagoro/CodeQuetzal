import ficheroImg from "../img/CARPETAS.webp"
import compresorImg from "../img/default.jpg"

const data=[
    {
        id:"1",
        nombre:"Organizador de fichero",
        descripcion:"Plantilla desarrollada en python, tiene como función organizar los directorios donde frecuenta dejar archivos regados en base a la configuración que desee, trabaja con la librería PIL (Python Image Library) y Os para poder manipular y leer sus archivos.",
        autor:"Juanjo",
        github:"https://github.com/ShonSag/Compresor-de-archivos.git",
        imagen:ficheroImg
    },
    {   
        id:"2",
        nombre:"Compresor de archivos",
        descripcion:"¿Cansado de buscar en la web compresores que muchas veces fallan o no solucionan el problema?, entonces este compresor de imágenes hecho con python más la librería PIL le ayudará con ese problema, solo está en usted decidir en qué carpeta donde se encuentre su imagen y la calidad que desea para la misma.",
        autor:"Marcos",
        github:"https://github.com/ShonSag/Organizador-de-fichero.git",
        imagen:compresorImg
    }
]

export default data;