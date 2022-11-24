function CardTemplate({name, description, autor, github, image}) {
    return (  
        <>
            <div>
                <img src={image}></img>
                <a target="_blank" href={github}>Descargar</a>
                <p>{autor}</p>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </>
    );
}

export default CardTemplate;