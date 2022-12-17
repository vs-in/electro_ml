import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={"/"}>
                    <img className='icono' src='./icono_ml.jpg' width="50"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={"/"}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/tienda"}>Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/proveedores"}>Proveedores</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={"/Nosotros"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nosotros
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"/quienes_somos"}>¿Quienes Somos?</Link></li>
                                <li><Link className="dropdown-item" to={"/contacto"}>Contacto</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar