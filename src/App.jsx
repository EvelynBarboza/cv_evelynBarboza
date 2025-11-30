import { useState } from 'react'
import imgCv from '../public/img/imgCv.jpg'
import Card from '../src/components/Card/Card'
import './App.css'
import CardPresentacion from './components/CardPresentacion/CardPresentacion'
import linkedin from '../public/img/linkedin.png'
import wpnegro from '../public/img/wpnegro.jpg'
import gmail from '../public/img/gmail.png'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={imgCv} className="mifoto" alt="mifoto" />
      </div>
      
      <div>
        <h1>Evelyn Barboza</h1>
        <h4>Programadora, Analista Genexus Jr</h4>
      </div>
      <div className='contenedorCardPresentacion'>
        <CardPresentacion tituloP='Objetivo' textCardP='model text, and a search for lorem ipsum will uncover many web sites still in t orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15er many web sites still in t'></CardPresentacion>
      </div>
      <div className='cards-container'>
      <div className='contenedorCard'> 
        <Card
            titulo="Formación Académica"
            textCard="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15er many web sites still in t"
            texBtn="Continuar leyendo..."
        />
      </div>
      <div className='contenedorCard'>
        <Card
            titulo="Experiencias Laborales"
            textCard="model text, and a search for lorem ipsum will uncover many web sites still in t"
            texBtn="Ver siguiente"
        />
      </div>
      </div>
      <div className='cards-container'>
      <div className='contenedorCard'> 
         <Card
            titulo="Proyectos Personales"
            textCard="Tengo repositorios en GitHub con proyectos personales"
            texBtn="Ir a GitHub"
            btnLink="https://github.com/EvelynBarboza?tab=repositories"
          />
      </div>
      <div className='contenedorCard'>
        <Card
            titulo="Experiencias Laborales"
            textCard="model text, and a search for lorem ipsum will uncover many web sites still in t"
            texBtn="Ver mas.."
          ></Card>
          <h2>
              Fijate como acá tengo esta etiqueta que recibo como children,
              puedo tener más cosas, incluso otros componentes.{" "}
        </h2>
      </div>
      </div>
      <div className='contenedorCardPresentacion'>
        <CardPresentacion 
        tituloP='Contacto' 
        textCardP=''>
          <a href="https://www.linkedin.com/in/evelyn-barboza-cosentino-411510170/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={linkedin} className="logos" alt="linkedin" />
          </a>
          
          <a href="https://wa.me/+59894404967?text=Hola!%20Quisiera%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={wpnegro}  className="logos" alt="WhatsApp" />
          </a>
          <a href="mailto:tucorreo@gmail.com?subject=Consulta&body=Hola!%20Quisiera%20saber..."
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={gmail} className="logos" alt="gmail" />
          </a>
          
        </CardPresentacion>
      </div>

    </>
  )
}

export default App
