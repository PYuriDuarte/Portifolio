import React from 'react';

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
          <img src={igod} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={pgod} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        <img src={igod} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={ppoke} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        <img src={igod} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={prank} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        <img src={igod} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={pimc} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
        <img src={igod} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={pcep} type="video/mp4"/>
          </video>
        </div>        
        <div className='cardContent'>
        <img src={igod} alt="site do god of war"/>
          <video autoPlay muted loop>
            <source src={pmusic} type="video/mp4"/>
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