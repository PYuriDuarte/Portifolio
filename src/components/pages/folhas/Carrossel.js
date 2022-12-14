import { useEffect, useState, useRef } from 'react';

import {motion} from 'framer-motion';
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'
import f4 from '../../images/f4.jpg'

const imageCard = [f1, f2, f3, f4];
const nomeprojetos = ["Projeto CEP", "Projeto RankS", "Projeto God of War", "Projeto Music"];

function Carrosseljs(){

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {      
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <motion.div className='carrossel' whileTap={{cursor: "grabbing"}}>
      <motion.div className='inner' drag="x" dragConstraints={{right: 100, left: -300}}>

        <motion.div className='tituloCarrossel'>
          {nomeprojetos.map(nome => (
            <motion.div className='nomeDoProjeto' key={nome}>            
              <h3>{nome}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='imageCarrossel'>
          {imageCard.map(image => (
            <motion.div className='card' key={image}>            
              <img src={image} alt="Projeto CEP"/>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </motion.div>
  )

};

export default Carrosseljs;