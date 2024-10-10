import React from 'react'

const Esta_pagina_esta_hecha_de = () => {
    const resaltado_colores = {
        resaltadoCeleste: 'text-primary',
        LetrasRojasFuertes: 'text-danger fw-bold',
        TextoBlanco: 'text-white fw-bold'
    };
    return (
        <div className="d-flex flex-column text-center p-4 pt-5 align-items-center justify-content-center text-secondary">
            <div style={{ background: "linear-gradient(rgba(18,32,69,0.85),rgba(17,59,81,0.85)),url(https://deadahead.wiki.gg/images/b/b1/BgGRID.png) repeat" }}  className="w-100 p-4 mt-4 rounded shadow">
                <h3 className="text-white">¿Qué cosas usamos para crear esta página?</h3>
                <ul className="list-unstyled text-light">
                    <li className=' p-2 h4'><i className="fas fa-check-circle"></i> HTML <i className="fab fa-html5"></i></li>
                    <li className=' p-2 h4'><i className="fas fa-check-circle"></i> Bootstrap <i className="bi bi-bootstrap"></i></li>
                    <li className=' p-2 h4'><i className="fas fa-check-circle"></i> React Router <i className="fas fa-map-signs"></i></li>
                    <li className=' p-2 h4'><i className="fas fa-check-circle"></i> React <i className="fab fa-react"></i></li>
                    <li className=' p-2 h4'><i className="fas fa-check-circle"></i> Apis <i className=""></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Esta_pagina_esta_hecha_de