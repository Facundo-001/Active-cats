import React from 'react';

const Mis_Projectos = () => {
    return (
        <div className="container my-5">
            <h3 className="text-center mb-4 text-info" style={{textShadow: '0 0 10px #3f77f8, 0 0 10px #3f77f8'}}>Todos mis projectos hasta ahora</h3>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Una página con estilo bonito</h5>
                            <p className="card-text">Página con diseño atractivo y responsivo.</p>
                            <a href="https://homesidework.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Tienda con precios moldeables</h5>
                            <p className="card-text">Una tienda interactiva donde puedes ajustar los precios y el nombre de sus productos.</p>
                            <a href="https://iridescent-scone-21b272.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Pruebas con JS</h5>
                            <p className="card-text">Experimentos y pruebas con JavaScript.</p>
                            <a href="https://test-java-script-by-ghost.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Página simple</h5>
                            <p className="card-text">Una página básica para experimentos simples.</p>
                            <a href="https://colorpicker-ghost.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-warning">
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                </div>
                <h4 className='text-white'>Tengo otro projecto mas pero ese es de react y tendria que crear otra carpeta app de react y lo cual no tengo espacio en el disco para hacerlo.</h4>
            </div>
        </div>
    );
}

export default Mis_Projectos;
