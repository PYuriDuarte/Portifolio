import f1 from '../../images/f1.jpg'
// import f2 from '../../images/f2.jpg'
// import f3 from '../../images/f3.jpg'
// import f4 from '../../images/f4.jpg'

function SobreMimjs(){

  return (
    
    <div id="sobreMimId">

      <div className="sobreMim">
        <div className="titleSobreMim">
          <span>&lt;h2&gt;</span>
          <a href="#"><h2>Sobre mim</h2></a>  
          <span>&lt;/h2&gt;</span>      
        </div>
        <div className="h3SobreMim">
          <span>&lt;h3&gt;</span>
          <h3> Este é o início da minha jornada como desenvolvedor Front-end.</h3>
          <span>&lt;/h3&gt;</span>
        </div>    
        <div className="paragrafoSobreMim">
          <span>&lt;p&gt;</span>
          <p>
            Sempre fui apaixonado por tecnologia e depois que descobri esse caminho de carreira, fiquei ainda mais apaixonado. 
            Estou cursando Análise e Desenvolvimento de Sistemas, e entre tantas opções do ramo, foi no desenvolvimento web que 
            me encontrei, dai para frente decidi que seria um <strong>Desenvolvedor Front-end</strong>. Sou tão confiante quanto 
            curioso e sempre trabalhando para melhorar minhas habilidades, uma página por vez.
          </p>        
          <span>&lt;/p&gt;</span>
        </div>
      </div>

      <div className="foteste">
        <img src={f1} alt="Yuri Duarte"/>       
      </div>

      <div className="perfil">
        <h3>Perfil: ORIENTADO A RESULTADOS</h3>
        
        <div className="circulo">

          <div className="circuloConteudo">
            <span className="a circuloDeProgresso circuloDeProgresso--60"></span>          
            <span className="legendaDoCirculo">FOCADO</span>
          </div> 

          <div className="circuloConteudo">
            <span className="b circuloDeProgresso circuloDeProgresso--92"></span>          
            <span className="legendaDoCirculo">COMPETITIVO</span>
          </div> 

          <div className="circuloConteudo">
            <span className="c circuloDeProgresso circuloDeProgresso--65"></span>
            <span className="legendaDoCirculo">EXTROVERTIDO</span>
          </div>  

          <div className="circuloConteudo">
            <span className="d circuloDeProgresso circuloDeProgresso--90"></span>          
            <span className="legendaDoCirculo">ABERTO AO RISCO</span>
          </div>  

          <div className="circuloConteudo">
            <span className="e circuloDeProgresso circuloDeProgresso--75"></span>          
            <span className="legendaDoCirculo">ORIENTADO A TAREFAS</span>
          </div>

        </div>        
      </div>

      
            
    </div> 
  )

};

export default SobreMimjs;