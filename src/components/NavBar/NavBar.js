import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logorecortado.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <header>
        {/* Barra de navegacion DESKTOP*/}
        <nav class="navdesktop">
          <a class="logoNav" href="index.html"><img src={logo} width="120" height="120"
            alt="Imagen de logo" /></a>
          <ul class="navMenu">
            <li>
              <div class="dropdown dropmenu">
                <a class="btn btn-secondary dropdown-toggle prodboton" href="./pages/productos.html"
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul class="dropdown-menu menu">
                  <li><a class="dropdown-item" href="./pages/productos.html#personajes">Personajes</a></li>
                  <li><a class="dropdown-item"
                    href="./pages/productos.html#aniv">Aniversarios-Casamientos-Bautismos</a></li>
                  <li><a class="dropdown-item" href="./pages/productos.html#futbol">Futbol</a></li>
                  <li><a class="dropdown-item" href="./pages/productos.html#num">Numeros/Letras</a></li>
                  <li><a class="dropdown-item" href="./pages/productos.html#inst">Institucionales</a></li>
                  <li><a class="dropdown-item" href="./pages/productos.html#md">Mesas Dulces</a></li>
                </ul>
              </div>
            </li>
            <li> <a href="./pages/historia.html">Historia</a> </li>
            <li> <a href="./pages/comohacerpedido.html">Como hacer <br /> mi pedido?</a> </li>
            <li> <a href="./pages/contacto.html">Contacto</a> </li>
          </ul>
          <div class="navCart">
          <CartWidget />
          </div>
        </nav>
        {/* <!-- Fin barra de navegacion DESKTOP --> */}


        {/* <!-- Barra navegacion MOBILE --> */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary navmobile">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img src={logo} width="120" height="120"
              alt="Imagen de Logo Pasteleria y Decoracion" /></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="./pages/productos.html">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/historia.html">Historia</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/comohacerpedido.html">Como hacer mi pedido?</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/contacto.html">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Fin barra de navegacion MOBILE --> */}
      </header>
    </>
  )
}

export default NavBar
