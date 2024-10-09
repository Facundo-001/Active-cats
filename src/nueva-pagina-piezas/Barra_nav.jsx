    import React from 'react'
    import './style.css'
    import { Link } from 'react-router-dom';
    

    const Barra_nav = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
                <a className="navbar-brand fs-4" href="#">
                    <img
                        className="rounded-3"
                        style={{marginRight: '.6em'}}
                        width="45"
                        height="45"
                        src="https://st4.depositphotos.com/11498520/22526/v/450/depositphotos_225265782-stock-illustration-cat-vector-kitten-calico-icon.jpg" alt="" />
                        Active Cats
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to='/Testeo-Zone/TypeScript' className="nav-link active fs-6" aria-current="page" href="#">Pruebas TypeScript</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Facciones/Equipos/dead-ahead-warfare' className="nav-link active fs-6" href="#">Sobre las facciones</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Galeria-de-gatitos" className="nav-link active fs-6" href="#">Foto de gatitos</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled fs-6" href="#" tabIndex="-1" aria-disabled="true">Proximamente.</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

    export default Barra_nav
