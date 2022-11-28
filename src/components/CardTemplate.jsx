

function CardTemplate({id, name, autor, image, github, description}) {
    return (
        <>
            <div>
                <div className="visual">
                    <img src={image}></img>
                    <div className="info1">
                        <a target="_blank" href={github}><button>Descargar</button></a>
                        <p>{autor}</p>
                    </div>
                </div>
                <div className="info">
                    <p className="title">{name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </>
      );
}

export default CardTemplate;