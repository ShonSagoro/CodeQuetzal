import CardTemplates from "./CardTemplates"
import data from "../assets/data/data"

function Templates() {


  return (
    <>
      <div className="container">
        {data.map((template) => (
          <CardTemplates
            key={template.id}
            name={template.nombre}
            description={template.descripcion}
            autor={template.autor}
            github={template.github}
            image={template.imagen} />
        ))}
      </div>
    </>
  );
}


export default Templates;
