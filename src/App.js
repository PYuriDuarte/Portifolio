
import './components/layout/css/main.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Containerjs from './components/layout/Container';
import NavBarjs from './components/layout/NavBar';
import Homejs from './components/pages/Home';
import Projectsjs from './components/pages/Projects';
import Habilitesjs from './components/pages/Habilites';
import Contactjs from './components/pages/Contact';
import Sobrejs from './components/pages/Sobre';
import BtnPagejs from './components/layout/BtnPage';



function App() {
  return (
    <Router>
      <Containerjs>
        <NavBarjs/>
        <BtnPagejs/>
        <Routes>
          <Route path='/' exact='true' element={<Homejs/>}></Route>
          <Route path='/habilites' element={<Habilitesjs/>}></Route>
          <Route path='/projects' element={<Projectsjs/>}></Route>
          <Route path='/contact' element={<Contactjs/>}></Route>              
          <Route path='/sobre' element={<Sobrejs/>}></Route>                   
        </Routes>
      </Containerjs>
    </Router>
  );
}

export default App;
