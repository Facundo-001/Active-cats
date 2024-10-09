import React from 'react';
import { Link } from 'react-router-dom';

const Barrita_cambiar = () => {
    return (
        <div className=''>
            {/* Barra para pantallas grandes */}
            <div style={{background: 'linear-gradient(rgba(18, 32, 69, 0.85), rgba(17, 59, 81, 0.85))'}} className='d-none d-md-flex btn-group justify-content-center p-3'>
                <Link to='/Esta-pagina-hecha-de' className='btn btn-outline-info'>
                    ¿De qué está hecha esta página?
                </Link>
                <Link to='/Mi-nivel-segun-yo' className='btn btn-outline-info'>
                    Mi nivel según yo
                </Link>
                <Link to='/' className='btn btn-outline-info'>
                    Mis Proyectos
                </Link>
                <Link to='/informacion-sobre-esta-pagina' className='btn btn-outline-info'>
                    Información sobre esta página
                </Link>
            </div>

            {/* Barra para pantallas pequeñas */}
            <div style={{background: 'linear-gradient(rgba(18, 32, 69, 0.85), rgba(17, 59, 81, 0.85))'}} className='d-flex d-md-none justify-content-center flex-wrap p-3'>
                <Link to='/Informacion-sobre-la-pagina' className='btn btn-outline-info me-0 rounded-start'>
                    ¿De qué está hecha esta página?
                </Link>
                <Link to='/Esta-pagina-hecha-de' className='btn btn-outline-info mx-0'>
                    Mi nivel según yo
                </Link>
                <Link to='/' className='btn btn-outline-info mx-0'>
                    Mis Proyectos
                </Link>
                <Link to='/informacion-sobre-esta-pagina' className='btn btn-outline-info ms-0 rounded-end'>
                    Información sobre esta página
                </Link>
            </div>
        </div>
    );
};

export default Barrita_cambiar;
