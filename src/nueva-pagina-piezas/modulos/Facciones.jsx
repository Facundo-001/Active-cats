import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Facciones = () => {
    const facciones = [
        {
            "nombre": "Facción/Equipo Militar",
            "descripcion": "El equipo militar en Dead Ahead: Warfare está diseñado para ofrecer un enfoque táctico y de combate directo. Se caracteriza por su organización y capacidad de trabajar en equipo, lo que les permite hacer frente a diversas amenazas en el campo de batalla.",
            "logo": "https://deadahead.wiki.gg/images/1/13/Military_logo.png?20230929224205",
            "equipos": [
                { "nombre": "Equipo militar", "detalles": "El equipo militar está compuesto por soldados bien entrenados que utilizan tácticas avanzadas y armamento especializado para enfrentar a sus enemigos." },
                { "nombre": "Ventajas" },
                { "nombre": "ventaja-1", "detalles": "Entrenamiento y disciplina que permiten ejecutar tácticas complejas." },
                { "nombre": "ventaja-2", "detalles": "Acceso a equipamiento avanzado que brinda ventajas en combate." },
                { "nombre": "ventaja-3", "detalles": "Capacidad de adaptación a diferentes situaciones y escenarios de combate." },
                { "nombre": "Desventajas" },
                { "nombre": "Desventaja-1", "detalles": "Requiere buena coordinación y comunicación entre miembros del equipo." },
                { "nombre": "Desventaja-2", "detalles": "Dependencia de recursos y suministros, lo que puede ser un desafío." },
                { "nombre": "Desventaja-3", "detalles": "Vulnerabilidad a ataques sorpresa si no están bien posicionados." }
            ]
        },
        {
            nombre: "Facción B",
            descripcion: "Facción B se especializa en ataques a larga distancia y en el uso de tecnología avanzada.",
            logo: "url_del_logo_b.png",
            equipos: [
                { nombre: "Equipo 4", detalles: "Descripción breve del Equipo 4." },
                { nombre: "Equipo 5", detalles: "Descripción breve del Equipo 5." },
                { nombre: "Equipo 6", detalles: "Descripción breve del Equipo 6." }
            ]
        },
        // Agrega más facciones aquí
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Facciones de Dead Ahead Warfare</h2>
            <p className="text-center mb-5">
                Aquí podrás conocer las facciones que son equipos humanos conformados por más de 5 equipos en total.
            </p>
            <div className="row">
                {facciones.map((faccion, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card border-dark">
                            <div className="card-header text-white bg-dark text-center">
                                <h3>{faccion.nombre}</h3>
                                <img src={faccion.logo} alt={`${faccion.nombre} Logo`} className="img-fluid" style={{ height: '100px' }} />
                            </div>
                            <div className="card-body">
                                <p className="card-text">{faccion.descripcion}</p>
                                <h5>Equipos:</h5>
                                <ul className="list-unstyled">
                                    {faccion.equipos.map((equipo, i) => (
                                        <li key={i} className="p-2">
                                            <strong>{equipo.nombre}:</strong> {equipo.detalles}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Facciones;
