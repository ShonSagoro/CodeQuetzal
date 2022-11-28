import {useNavigate} from 'react-router-dom'

function CardTemplates({id, name, autor, image}) {
    const navigate = useNavigate()

    const handleClick=()=>{
        navigate(`/example`);
    }

    
    return (  
        <div className="template" onClick={handleClick()}>
            <div id={id}>
                <div className="img">
                    <img src={image}></img>
                </div>
                <div className="info">
                    <p>{name}</p>
                    <p>{autor}</p>
                </div>
            </div>
        </div>
        
    );
}

export default CardTemplates;