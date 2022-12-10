import {Link} from 'react-router-dom';

function Sobrejs(){  

  return (
    <div className='folhas'>
      <span>
        <div></div>
        <div></div>
      </span>

      <Link to="/eu"><p>Sobre Mim</p></Link>
      
      <span>
        <div></div>
        <div></div>
      </span>
    </div>
  )
};

export default Sobrejs;