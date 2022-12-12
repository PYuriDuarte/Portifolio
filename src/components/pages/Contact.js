import Formjs from "./folhas/Form";
import Mapjs from "./folhas/Map";

function Contactjs(){

  return (
    <div className="contato">
      <div className="formulario">
        <h2>Contactjs</h2>
        <Formjs/>
      </div>      
      <Mapjs/>
    </div>
  )

};

export default Contactjs;