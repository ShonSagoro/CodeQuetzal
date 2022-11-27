
function CardTemplates({name, description, autor, github, image}) {
    return (  
        <div id={"container"+name}>
            <div>
                <img src={image}></img>
                <p>{autor}</p>
            </div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default CardTemplates;