

function Formjs(){

  return (
    <form className="form" action="https://formsubmit.co/yuri.viana10@gmail.com" method="POST">
      <label className="labelname" htmlFor="name">Nome</label>
      <input id="name" type="text" name="name" placeholder="Digite o seu nome aqui" required/>
      <label className="labelemail" htmlFor="email">E-mail</label>
      <input id="email" type="email" name="email" placeholder="Digite o seu e-mail aqui" required/>
      <label className="labelmessage" htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Deixe aqui uma mensagem" required></textarea>
      <input type="hidden" name="_subject" value="Novo Contato!"/>
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_template" value="table"/>
      <input type="hidden" name="_next" value="http://localhost:3000/contact"/>
      <button type="submit">Enviar</button>
    </form>
  )

};

export default Formjs;