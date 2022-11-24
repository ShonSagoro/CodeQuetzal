import { useEffect, useState } from "react";

function Template() {
  const [templates, setTemplates] = useState([{}]);

  useEffect(() => {
    fetch("../assets/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTemplates(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="container">
        {templates.map((template) => {
          return (
            <CardArtist
              name={template.nombre}
              description={template.descripcion}
              autor={template.autor}
              github={template.github}
              image={template.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Template;
