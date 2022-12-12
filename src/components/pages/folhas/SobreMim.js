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
          <a><h2>Sobre mim</h2></a>  
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
        {/* <div className="tituloDoPerfil">
          <span>Focado</span>
          <span>Competitivo</span>
          <span>Extrovertido</span>
          <span>Aberto ao risco</span>
          <span>Orientado a tarefas</span>
        </div> */}
        <div className="circulo">          
          <span className="a circuloDeProgresso circuloDeProgresso--60"></span>
          <span className="b circuloDeProgresso circuloDeProgresso--92"></span>
          <span className="c circuloDeProgresso circuloDeProgresso--65"></span>
          <span className="d circuloDeProgresso circuloDeProgresso--90"></span>
          <span className="e circuloDeProgresso circuloDeProgresso--75"></span>
        </div>        
      </div>

      {/* <div className="fotoCarrossel">

        <div className="decorFoto">
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
        </div>

        <div className="fotoContainer">

          <div className='fotoPai'>
            <a className='foto1'><img src={f1} alt="Foto1 do Yuri"/></a>
          </div>

          <div className='fotoPai'>
            <a className='foto2'><img src={f2} alt="Foto2 do Yuri"/></a>
          </div>

          <div className='fotoPai'>
            <a className='foto3'><img src={f3} alt="Foto3 do Yuri"/></a>
          </div>

          <div className='fotoPai'>
            <a className='foto4'><img src={f4} alt="Foto4 do Yuri"/></a>
          </div>
          
        </div>

        <div className="decorFoto">
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
          <div className="decor"></div>
        </div>
               
      </div>   */}
            
    </div> 
  )

};

export default SobreMimjs;