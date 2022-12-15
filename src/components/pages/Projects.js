import React from 'react';

import f1 from '../images/f1.jpg'
import f2 from '../images/f2.jpg'
import f3 from '../images/f3.jpg'
import f4 from '../images/f4.jpg'

function Projectsjs(){

  return (
    <div className="projetos">
      <h2>Projetos</h2>
      <div className='cardContainer'>

        <div className='cardContent'>
          <img src={f1} alt="projeto cep"/>
        </div>
        <div className='cardContent'>
          <img src={f1} alt="projeto cep"/>
        </div>
        <div className='cardContent'>
          <img src={f1} alt="projeto cep"/>
        </div>
        <div className='cardContent'>
          <img src={f1} alt="projeto cep"/>
        </div>
        <div className='cardContent'>
          <img src={f1} alt="projeto cep"/>
        </div>
        <div className='cardContent'>
          <img src={f1} alt="projeto cep"/>
        </div>

      </div>             
    </div>
  )

};

export default Projectsjs;