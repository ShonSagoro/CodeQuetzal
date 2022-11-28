import data from "../assets/data/data"
import CardTemplate from "./CardTemplate";
import "../assets/css/CardTemplate.css"

function Template() {
    const id = 0;
    return ( 
        <>
        <div className="container">
            <CardTemplate
                key={id}
                name={data[id].nombre}
                autor={data[id].autor}
                image={data[id].imagen} 
                github={data[id].github}
                description={data[id].descripcion}
            />
        </div>
        </> 
    );
}

export default Template;