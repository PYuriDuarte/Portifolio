import React from 'react';
import Cv from '../images/cv-yuri_duarte-front_end.pdf';
import{FaSass, } from 'react-icons/fa';
import{SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiGit} from 'react-icons/si';

function Habilitesjs(){

  return (
    <section className="tech">
      <div className='techTitle'>
        <span>&lt;h2&gt;</span>
        <h2>Habilidades</h2>
        <span>&lt;/h2&gt;</span>
      </div>
      
      <span>&lt;section&gt;</span>
      <ul>
        <li>
          <p className='html5'>HTML5</p>
          <SiHtml5 className='html5svg'/>        
        </li>
        <li>
          <p className='css3'>CSS3</p>
          <SiCss3 className='css3svg'/>        
        </li>
        <li>
          <p className='sass'>SASS</p>
          <FaSass className='sasssvg'/>        
        </li>
        <li>
          <p className='javascript'>JAVASCRIPT</p>
          <SiJavascript className='javascriptsvg'/>        
        </li>
        <li>
          <p className='node'>NODE JS</p>
          <SiNodedotjs className='nodesvg'/>        
        </li>
        <li>
          <p className='git'>GIT</p>
          <SiGit className='gitsvg'/>        
        </li>
        <li>
          <p className='react'>REACT JS</p>
          <SiReact className='reactsvg'/>        
        </li>        
      </ul>
      <span>&lt;/section&gt;</span>

      <div className='curriculo'>
        <span>&lt;button&gt;</span>
        <a href={Cv} download="cv-yuri_duarte-front_end">Download CV</a>
        <span>&lt;/button&gt;</span>
      </div>
      

    </section>  
  )
};

export default Habilitesjs;