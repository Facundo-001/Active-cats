import React from 'react';

function Contenido_Principal() {
  const resaltado_colores = {
    resaltadoCeleste: 'text-primary',
    LetrasRojasFuertes: 'text-danger fw-bold',
    TextoBlanco: 'text-white fw-bold'
  };

  return (
    <div className="d-flex flex-column text-center p-4 pt-5 align-items-center justify-content-center text-secondary bg-dark">
      <h2 className="text-white fw-bold mb-4">
        Bienvenido a <span className={resaltado_colores.resaltadoCeleste}>Active files <img className="rounded-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pvfNqhkFqBmHL9bnsDpFIWFEHfYbGnLEqA&s" alt="NEW WORD" width="40" height="40" /></span>
      </h2>

      <p className="mb-4">
        <hr className="border-light" />
        ¿Sabías que cada día trabajamos para mejorar la página? 
        <hr className="border-light" />
        Actualmente, estamos en una fase de desarrollo, lo que implica cambios constantes.  
        <span className={resaltado_colores.LetrasRojasFuertes}> 
          Es importante mencionar que esta página podría ser abandonada una vez que haya cumplido su función como fase de prueba.
        </span>
        <hr className="border-light" />
      </p>

      <h4 className={`${resaltado_colores.TextoBlanco} mb-4`}>Introducción a la Página</h4>
      <p className="text-light mb-4">
        Esta página es un pequeño rincón donde estamos probando varias cosas. Aquí encontrarás un montón de experimentos y pruebas de diferentes funcionalidades. 
        Estamos en modo de desarrollo, así que todo puede cambiar de un día para otro, ¡y eso es parte de la diversión!
      </p>

      <p className="text-light mb-4">
        Además, estamos pensando en darle un giro multimedia en el futuro. ¡Imagina poder disfrutar de vídeos, música y más! La idea es crear un espacio donde podamos jugar con ideas y ver qué funciona y qué no.
      </p>

      <p className="text-light mb-4">
        Es importante mencionar que, aunque estamos emocionados por lo que viene, esta página podría ser abandonada una vez que cumpla su propósito de prueba. Pero no te preocupes, lo que importa es el viaje y lo que aprendemos en el camino. ¡Gracias por acompañarnos en esta aventura!
      </p>

      <div className="w-100 bg-secondary p-4 mt-4 rounded shadow">
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
  );
}

export default Contenido_Principal;
