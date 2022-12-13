
import {Link} from 'react-router-dom';
import Y from '../images/y-branco.png';
import Socialjs from '../pages/folhas/Social';

function NavBarjs(){

  return (
    <nav className='navbar'>
      <div className='navdiv'>
        <Link to="/">
          <img className='logo ipsilon' src={Y} alt="logo Yuri"/>
        </Link>
        <hr/>
        <ul className='list'>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/habilites">Habilidades</Link></li>
          <li><Link to="/contact">Contato</Link></li>          
        </ul>
        <Socialjs/>
      </div>    
    </nav>
  )

};

export default NavBarjs;