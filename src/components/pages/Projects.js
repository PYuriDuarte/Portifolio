import React from 'react';
import ReactPlayer from 'react-player'

import pimc from '../videos/imc.mp4';
import pcep from '../videos/cep.mp4';
import pgod from '../videos/god.mp4';
import plamp from '../videos/lamp.mp4';
import pmusic from '../videos/music.mp4';
import prank from '../videos/rank.mp4';
import ppoke from '../videos/poke.mp4';

import iimc from '../images/imc.png';
import icep from '../images/cep.png';
import igod from '../images/god.png';
import ilamp from '../images/lamp.png';
import imusic from '../images/music.png';
import irank from '../images/rank.png';
import ipoke from '../images/poke.png';

function Projectsjs(){

  return (
    <div className="projetos">
      <h2>Projetos</h2>
      <div className='cardContainer'>

        <div className='cardContent'>
          {/* <img src={igod} alt="site do god of war"/> */}
          <ReactPlayer url="https://www.youtube.com/watch?v=wSjja0u0heg" muted controls playing/>
        </div>
        <div className='cardContent'>
        <img src={ipoke} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={ppoke} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        <img src={irank} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={prank} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        <img src={iimc} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={pimc} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        {/* <img src={icep} alt="site do god of war"/> */}
        <ReactPlayer url="https://www.youtube.com/watch?v=MAN3ZnxJE2o&t=4s" muted controls playing/>
        </div>        
        <div className='cardContent'>
        <img src={imusic} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={pmusic} type="video/mp4"/>
          </video>
        </div>        
        <div className='cardContent'>
        <img src={ilamp} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={plamp} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        <img src={igod} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={plamp} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        <img src={igod} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={plamp} type="video/mp4"/>
          </video>
        </div>        

      </div>             
    </div>
  )

};

export default Projectsjs;