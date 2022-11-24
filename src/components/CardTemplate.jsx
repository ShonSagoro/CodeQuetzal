import ImgDefault from "../assets/img/default.jpg"

function CardTemplate() {
    return (
        <>
            <div>
                <img src={ImgDefault}></img>
                <a target="_blank" href='#'>Descargar</a>
                <p>JuanJo</p>
            </div>
            <div>
                <h2>Organizador de carpetas</h2>
                <p>Plantilla desarrollada en python, tiene como función organizar los directorios donde frecuenta dejar archivos regados en base a la configuración que desee, trabaja con la librería PIL (Python Image Library) y Os para poder manipular y leer sus archivos.</p>
            </div>
        </>
      );
}

export default CardTemplate;