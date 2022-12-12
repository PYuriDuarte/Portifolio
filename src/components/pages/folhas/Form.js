import Contactjs from "../Contact";

function Formjs(){

  return (
    <form action="https://formsubmit.co/yuri.viana10@gmail.com" method="POST">
      <input type="text" name="name" placeholder="Nome" required/>
      <input type="email" name="email" placeholder="Email" required/>
      <textarea name="message" placeholder="Mensagem" required></textarea>
      <input type="hidden" name="_subject" value="Novo Contato!"/>
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_template" value="table"/>
      <input type="hidden" name="_next" value="http://localhost:3000/contact"/>
      <button type="submit">Enviar</button>
    </form>
  )

};

export default Formjs;