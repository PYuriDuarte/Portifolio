import{FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import{BsGithub} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Y from '../images/y-branco.png';

function NavBarjs(){

  return (
    <nav className='navbar'>
      <div className='navdiv'>
        <Link to="/">
          <img src={Y} alt="logo Yuri"/>
        </Link>
        <hr/>
        <ul className='list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/habilites">Habilidades</Link></li>
        </ul>
        <ul className='social_list'>
          <li className='icon icon-face'><FaFacebook/></li>
          <li className='icon icon-insta'><FaInstagram/></li>
          <li className='icon icon-link'><FaLinkedin/></li>
          <li className='icon icon-git'><BsGithub/></li>
        </ul>
      </div>    
    </nav>
  )

};

export default NavBarjs;