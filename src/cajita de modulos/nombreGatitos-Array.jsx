import React, { useState } from 'react';

function ListaGatos() {
    // Lista con nombres de gatos
    const NombreMichi = ['Carapintada', 'Barvita', 'Marron', 'Garfield'];

    // Estado para manejar los elementos que serán leídos
    const [gatosLeidos, setGatosLeidos] = useState([]);

    // Función que actualiza el estado con los nombres de los gatos
    function leerElementos() {
        const nuevosGatos = NombreMichi.map((item, index) => `Leyendo... el nombre es: ${item}, su número de index es: ${index}`);
        setGatosLeidos(nuevosGatos);  // Actualiza el estado con la nueva lista
    }

    return (
        <div className=' bg-dark text-white p-3 d-flex flex-column'>
            <h3>Prueba haciendo leer un array en React</h3>

            {/* Lista que se actualiza dinámicamente */}
            <ul id="papel" className=' text-danger'>
                {gatosLeidos.length === 0
                    ? NombreMichi.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))
                    : gatosLeidos.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))
                }
            </ul>

            {/* Botón para disparar la función leerElementos */}
            <button className="btn btn-info  text-center" onClick={leerElementos}>Leer en consola</button>
        </div>
    );
}

export default ListaGatos;
