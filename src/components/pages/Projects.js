import React from 'react';

import pimc from '../videos/imc.mp4';
import pcep from '../videos/cep.mp4';
import pgod from '../videos/god.mp4';
import plamp from '../videos/lamp.mp4';
import pmusic from '../videos/music.mp4';
import prank from '../videos/rank.mp4';

function Projectsjs(){

  return (
    <div className="projetos">
      <h2>Projetos</h2>
      <div className='cardContainer'>

        <div className='cardContent'>
          <video autoPlay muted>
            <source src={pimc} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
          <video autoPlay muted>
            <source src={pcep} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
          <video autoPlay muted>
            <source src={prank} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
          <video autoPlay muted>
            <source src={pmusic} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
          <video autoPlay muted>
            <source src={pgod} type="video/mp4"/>
          </video>
        </div>
        <div className='cardContent'>
          <video autoPlay muted>
            <source src={plamp} type="video/mp4"/>
          </video>
        </div>
        

      </div>             
    </div>
  )

};

export default Projectsjs;