import CardTemplates from "./CardTemplates"
import data from "../assets/data/data"
import "../assets/css/CardTemplates.css"

function Templates() {


  return (
    <>
      <div className="container">
        {data.map((template) => (
          <CardTemplates
            key={template.id}
            id={template.id}
            name={template.nombre}
            autor={template.autor}
            image={template.imagen} />
        ))}
      </div>
    </>
  );
}


export default Templates;
