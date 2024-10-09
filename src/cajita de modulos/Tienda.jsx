import React, { useState } from 'react';

function Tienda() {
    const [contadores, setContadores] = useState({
        pan: 0,
        carne: 0,
        jugo: 0,
        gaseosa: 0,
        helado: 0
    });

    const handleClick = (event) => {
        // Verificar si el elemento clickeado es un botón
        if (event.target.tagName === 'BUTTON') {
            const producto = event.target.getAttribute('data-product');
            setContadores({
                ...contadores,
                [producto]: contadores[producto] + 1
            });
        }
    };

    return (
        <div className="bg-dark text-light p-4 vh-100 " onClick={handleClick}>
            <h2 className="text-center text-warning">
                Tienda Virtual :)
            </h2>
            <h5 className="text-center text-secondary mb-4">
                Esta cosa es solo para testear, no es nada real. ¡Gracias por leer!
            </h5>

            <ul className="list-group">
                {Object.entries(contadores).map(([producto, cantidad]) => (
                    <li key={producto} className="list-group-item d-flex justify-content-between align-items-center bg-dark text-warning">
                        {producto.charAt(0).toUpperCase() + producto.slice(1)} <span className="m-auto">{getPrecio(producto)}$</span>
                        <div>
                            <span className="badge bg-warning text-dark mx-2">{cantidad}</span>
                            <button className="btn btn-outline-warning btn-sm" data-product={producto}>Agregar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <ul>

                </ul>
            </div>
        </div>
    );

    // Función para obtener el precio de cada producto
    function getPrecio(producto) {
        const precios = {
            pan: 3000,
            carne: 8000,
            jugo: 2500,
            gaseosa: 10000,
            helado: 7500
        };
        return precios[producto];
    }
}

export default Tienda;
