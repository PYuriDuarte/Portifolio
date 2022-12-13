

function Formjs(){

  return (
    <form className="form" action="https://formsubmit.co/yuri.viana10@gmail.com" method="POST">
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" name="name" placeholder="Nome" required/>
      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" name="email" placeholder="Email" required/>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Mensagem" required></textarea>
      <input type="hidden" name="_subject" value="Novo Contato!"/>
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_template" value="table"/>
      <input type="hidden" name="_next" value="http://localhost:3000/contact"/>
      <button type="submit">Enviar</button>
    </form>
  )

};

export default Formjs;