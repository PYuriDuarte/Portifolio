import React from 'react';
import{FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import{BsGithub} from 'react-icons/bs';

function Techjs(){

  return (
    <section className="tech">
      <ul className='social_list'>
        <li className='icon icon-face'><a target="_blank" href='https://www.facebook.com/pedroyuri.vianaduarte'><FaFacebook/></a></li>
        <li className='icon icon-insta'><a target="_blank" href='https://www.instagram.com/pyuriduarte/'><FaInstagram/></a></li>
        <li className='icon icon-link'><a target="_blank" href='https://www.linkedin.com/in/yuri-duarte-7aa044178/'><FaLinkedin/></a></li>
        <li className='icon icon-git'><a target="_blank" href='https://github.com/PYuriDuarte'><BsGithub/></a></li>
      </ul>
    </section>
  )

};

export default Techjs;