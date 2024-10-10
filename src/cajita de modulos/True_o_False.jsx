import React, { useState } from 'react';

function True_o_False() {
  // Genera un número aleatorio (0 o 1)
  const [voleano, setVoleano] = useState(Math.round(Math.random()));
  console.log(voleano);

  // Función para manejar la lógica cuando el usuario presiona un botón
  const handleClick = (valor) => {
    if (parseInt(valor) === voleano) {
      alert('¡Correcto!');
    } else {
      alert('¡Incorrecto! Intenta nuevamente.');
    }

    // Genera un nuevo número aleatorio para el próximo intento
    setVoleano(Math.round(Math.random()));
  };

    return (
    <div className='bg-opacity-50 bg-black w-50 align-content-center text-info'>
        <p>Adivina: ¿es True o False?</p>
        <button type="button" id='true' value='1' onClick={(e) => handleClick(e.target.value)}>True</button>
        <button type="button" id='false' value='0' onClick={(e) => handleClick(e.target.value)}>False</button>
    </div>
    );
}

export default True_o_False;
