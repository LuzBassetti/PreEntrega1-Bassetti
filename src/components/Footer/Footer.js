import React from 'react'
import logo from '../../assets/logorecortado.png'
import * as Images from '../../assets/images'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer id="pie">
        <a href="index.html"><img src={logo} width="70" height="70" alt="Logo" /></a>

        <section id="sectionfoot1">
          <h3>Nuestras Redes</h3>
          <ul className="redes">
            <li>
              <a href="https://www.instagram.com/pasteleriaydecoracion/" target="_blank"><img
                src={Images.instagram} alt="Instagram" /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/silvina.giovanon" target="_blank"><img src={Images.facebook}
                alt="Facebook" /></a>
            </li>
            <li>
              <a href="https://wa.me/5493415889586? text=Hola%20Silvina!%20Me%20comunico%20porque%20vi%20tu%20pagina%20web%20y%20queria%20hacerte%20una%20consulta."
                target="_blank"><img src={Images.whatsapp} alt="Whatsapp" /></a>
            </li>
          </ul>
        </section>
        <section id="sectionfoot2">
          <div className="telefono">
            <img src={Images.phonecall} alt="Telefono" />
            <p>3415889586</p>
          </div>
          <div className="mail">
            <a href="mailto:giovanonsilvinamariel@gmail.com"><img src={Images.envelope} alt="Email" /></a>
            <a href="mailto:giovanonsilvinamariel@gmail.com">Email</a>
          </div>
        </section>

      </footer>
      {/* <!-- fin pie de pagina  --> */}

    </>

  )
}

export default Footer