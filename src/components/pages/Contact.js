import Formjs from "./folhas/Form";
import Mapjs from "./folhas/Map";

function Contactjs(){

  return (
    <div className="contato">      
      <div className="formulario">

        <div className="div1">
          <span className="spanh2top">&lt;h2&gt;</span>
          <h2>Entre em Contato</h2>
          <span className="spanh2bot">&lt;/h2&gt;</span>
        </div>

        <div className="div2">
          <span className="spanformtop">&lt;form&gt;</span>
          <Formjs/>   
          <span className="spanformbot">&lt;/form&gt;</span>
        </div>             
      </div>      
      <Mapjs/>      
    </div>
  )

};

export default Contactjs;