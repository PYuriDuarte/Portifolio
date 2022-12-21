import React from 'react';
import ReactPlayer from 'react-player'

import{BsFillCheckCircleFill, } from 'react-icons/bs';
import{FaSass, } from 'react-icons/fa';
import{SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiGit} from 'react-icons/si';

function Projectsjs(){


  return (
    <div className="projetos">
      <h2>Projetos</h2>
      <div className='cardContainer'>

        <div className='cardContent'>
          <div className='divgod divlogo'></div>
          <div className='cardText'>
            <ul>
              <li className='logohtml'><SiHtml5/></li>
              <li className='logocss'><SiCss3/></li>
              <li className='logosass'><FaSass/></li>
              <li className='logojavas'><SiJavascript/></li>              
            </ul>
            <h4>Porjeto God of War</h4>
            <a className='button' href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Prévia
            </a>
            <div className='divisita'>
              <a className='visita' target="_blank" href='https://pyuriduarte.github.io/projeto-godofwar/'>
                <p>Visitar</p>
                <BsFillCheckCircleFill className='iconPcheck'/>
              </a> 
            </div>                  
          </div>
          {/* <img src={igod} alt="site do god of war"/>
          <ReactPlayer url="https://www.youtube.com/watch?v=wSjja0u0heg" className="video" onReady playIcon light width="32rem" height="18rem" muted loop playing/> */}
        </div>
        <div className='cardContent'>
        <div className='divpoke divlogo'></div>
        <div className='cardText'>
            <ul>
              <li className='logohtml'><SiHtml5/></li>
              <li className='logocss'><SiCss3/></li>
              <li className='logojavas'><SiJavascript/></li>              
            </ul>
            <h4>Porjeto Pokedex</h4>
            <a className='button' href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Prévia
            </a>
            <div className='divisita'>
              <a className='visita' target="_blank" href='https://pyuriduarte.github.io/pokedex/'>
                <p>Visitar</p>
                <BsFillCheckCircleFill className='iconPcheck'/>
              </a> 
            </div>           
          </div>
          {/* <img src={ipoke} alt="site do god of war"/> 
          <ReactPlayer url="https://youtu.be/VeAH3mYyYzw" className="video" playIcon light width="32rem" height="18rem" muted loop playing/>*/}
        </div>
        <div className='cardContent'>
          {/* <img src={irank} alt="site do god of war"/> */}
          <ReactPlayer url="https://youtu.be/hsh_i75gIP0" className="video" playIcon light width="32rem" height="18rem" muted loop playing/>
        </div>
        <div className='cardContent'>
          {/* <img src={iimc} alt="site do god of war"/> */}
          <ReactPlayer url="https://youtu.be/ybtM0JouC9s" className="video" playIcon light width="32rem" height="18rem" muted loop playing/>
        </div>
        <div className='cardContent'>
          {/* <img src={icep} alt="site do god of war"/> */}
          <ReactPlayer url="https://www.youtube.com/watch?v=MAN3ZnxJE2o&t=4s" playIcon light className="video" width="32rem" height="18rem" muted loop playing/>
        </div>        
        <div className='cardContent'>
          {/* <img src={imusic} alt="site do god of war"/> */}
          <ReactPlayer url="https://youtu.be/LPq54FAlYuk" className="video" playIcon light width="32rem" height="18rem" muted loop playing/>
        </div>        
        <div className='cardContent'>
          {/* <img src={ilamp} alt="site do god of war"/> */}
          <ReactPlayer url="https://youtu.be/K5XC08kpang" className="video" playIcon light width="32rem" height="18rem" muted loop playing/>
        </div>
        <div className='cardContent'>
          {/* <img src={ilamp} alt="site do god of war"/> */}
          <ReactPlayer url="https://youtu.be/K5XC08kpang" className="video" playIcon light width="32rem" height="18rem" muted loop playing/>
        </div>
        <div className='cardContent'>
          {/* <img src={ilamp} alt="site do god of war"/> */}
          <ReactPlayer url="https://youtu.be/K5XC08kpang" className="video" playIcon           light width="32rem" height="18rem" muted loop playing/>
        </div>
               

      </div>             
    </div>
  )

};

export default Projectsjs;