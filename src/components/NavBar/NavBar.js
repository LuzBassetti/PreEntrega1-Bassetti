import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logorecortado.png';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header>
        {/* Barra de navegacion DESKTOP*/}
        <nav className="navdesktop">
          <Link className="logoNav" to="/"><img src={logo} width="120" height="120"
            alt="Imagen de logo"/></Link>
          <ul className="navMenu">
            {/* <li>
              <div className="dropdown dropmenu">
                <a className="btn btn-secondary dropdown-toggle prodboton" href="./pages/productos.html"
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu menu">
                  <li><a className="dropdown-item" href="./pages/productos.html#personajes">Personajes</a></li>
                  <li><a className="dropdown-item"
                    href="./pages/productos.html#aniv">Aniversarios-Casamientos-Bautismos</a></li>
                  <li><a className="dropdown-item" href="./pages/productos.html#futbol">Futbol</a></li>
                  <li><a className="dropdown-item" href="./pages/productos.html#num">Numeros/Letras</a></li>
                  <li><a className="dropdown-item" href="./pages/productos.html#inst">Institucionales</a></li>
                  <li><a className="dropdown-item" href="./pages/productos.html#md">Mesas Dulces</a></li>
                </ul>
              </div>
            </li> */}
            <li> <Link to="/category/chocotorta">Chocotorta</Link> </li>
            <li> <Link to="/category/cheesecake">Cheesecake</Link> </li>
            <li> <Link to="/category/lemonpie">Lemon Pie</Link> </li>
            <li> <Link to="/category/rogel">Rogel</Link> </li>
          </ul>
          <div className="navCart">
          <CartWidget />
          </div>
        </nav>
        {/* <!-- Fin barra de navegacion DESKTOP --> */}


        {/* <!-- Barra navegacion MOBILE --> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary navmobile">
          <div className="container-fluid">
            <Link className="navbar-brand" to="index.html"><img src={logo} width="120" height="120"
              alt="Imagen de Logo Pasteleria y Decoracion" /></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/category/chocotorta">Chocotorta</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/cheesecake">Cheesecake</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/lemonpie">Lemon Pie</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/rogel">Rogel</Link>
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
