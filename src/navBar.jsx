import { Link } from "react-router-dom";
import { FTB } from "./FooterBar";
<link rel="stylesheet" href="configuracion-toggle.css" />

function Body() {
  // Definición de clases para las alertas
  const Alertas = {
    AlertaRoja: "alert alert-danger",
    AlertaCeleste: "alert alert-info",
  };
  // function Avisar() {
  //   const alertaAVISO=document.createElement('div');
  //   const botonCerrar=document.createElement('button');
  //   alertaAVISO.textContent('Esta opcion no esta echa todavia estamos trabajando en ello.')
  // };

  return (
    <nav className="text-capitalize sticky-top navbar navbar-expand-lg bg-body-secondary d-flex flex-column">
      {/* <div className="bg-body w-100 h-100">
        <h4>Se seguira actualizando esta pagina.</h4>
      </div> */}
      <div className="container-fluid bg-body-secondary">
        <Link className="navbar-brand" to="Active-cats/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pvfNqhkFqBmHL9bnsDpFIWFEHfYbGnLEqA&s"
            alt="NEW WORD"
            width="40"
            height="40"
            className="rounded-3"
          />
          <span> Active Files</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item p-1">
              <a
                className="nav-link"
                href="https://bluuweb.github.io/desarrollo-web-bluuweb/18-01-react/#planificacion"
              >
                Docs Blueweb
              </a>
            </li>
            <li className="nav-item p-1">
              <a
                className="nav-link"
                href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
              >
                Docs Boostrap
              </a>
            </li>
            <li className="nav-item p-1">
              <Link className="nav-link" to="/Galeria-gatitos">
                Fotos De Gatitos
              </Link>
            </li>
            <li className="nav-item p-1">
              <a className="nav-link" href="#">
                Rick And Morty
              </a>
            </li>
            {/* <li className="nav-item p-1"> */}
              {/* <label htmlFor="toggle" className="btn btn-warning">off footer</label> */}
            {/* </li> */}
          </ul>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown p-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cosas Divertidas
                </a>
                <ul className="dropdown-menu  bg-warning" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Libreria-de-pokemones-random"
                    >
                      Pokemones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Tienda-mal-echa-XD">
                      Tienda
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Cajita-para-dibujar">
                      Dibujar
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/leer-array-Gatos">
                      Leer gatos array
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                    <li>
                      <Link className="dropdown-item" to="/TestFormulario">
                        Test Formulario
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/lista-propia">
                        Lista de tareas
                      </Link>
                    </li>
                </ul>
              </li>
            </ul>
          </div>
          <input className="d-none" type="checkbox" name="" id="toggle" />
          <a className="btn btn-dark" style={{marginLeft: 'auto'}} href="#">
              Iniciar Sesion
            </a>
          {/* SEPARADOR PARA EVTAR CONFUCION */}
        </div>
      </div>
    </nav>
  );
}

export default Body;






// import { Link } from "react-router-dom";
// import { useState } from "react";
// import FormularioInicioSesion from "./cajita de modulos/Formulario-Inicio-sesion"; // Importación corregida

// function Body() {
//   // Estado para manejar si el usuario está logueado y su nombre de usuario
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [showLoginForm, setShowLoginForm] = useState(false); // Para mostrar o esconder el formulario

//   // Función que se ejecuta cuando el usuario inicia sesión
//   const handleLogin = (username) => {
//     setUsername(username);
//     setIsLoggedIn(true);
//     setShowLoginForm(false); // Esconder el formulario de inicio de sesión después de iniciar sesión
//   };

//   // Función para cerrar sesión
//   const handleLogout = () => {
//     setUsername('');
//     setIsLoggedIn(false);
//   };

//   return (
//     <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pvfNqhkFqBmHL9bnsDpFIWFEHfYbGnLEqA&s"
//             alt="NEW WORD"
//             width="40"
//             height="40"
//           />
//           <span> Active Files</span>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item p-1">
//               <a
//                 className="nav-link"
//                 href="https://bluuweb.github.io/desarrollo-web-bluuweb/18-01-react/#planificacion"
//               >
//                 Docs Blueweb
//               </a>
//             </li>
//             <li className="nav-item p-1">
//               <a
//                 className="nav-link"
//                 href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
//               >
//                 Docs Boostrap
//               </a>
//             </li>
//             <li className="nav-item p-1">
//               <Link className="nav-link" to="/Galeria-gatitos">
//                 Fotos De Gatitos
//               </Link>
//             </li>
//             <li className="nav-item p-1">
//               <a className="nav-link" href="#">
//                 Rick And Morty
//               </a>
//             </li>
//           </ul>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item dropdown p-1">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Cosas Divertidas
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <Link
//                       className="dropdown-item"
//                       to="/Libreria-de-pokemones-random"
//                     >
//                       Pokemones
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/Tienda-mal-echa-XD">
//                       Tienda
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/Cajita-para-dibujar">
//                       Dibujar
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/leer-array-Gatos">
//                       Leer gatos array
//                     </Link>
//                   </li>
//                   <li className="dropdown-divider"></li>
//                 </ul>
//               </li>
//             </ul>
//           </div>

//           {/* Botón de Iniciar Sesión o Avatar */}
//           {!isLoggedIn ? (
//             <div style={{ marginLeft: 'auto' }}>
//               <a
//                 className="btn btn-dark"
//                 href="#"
//                 onClick={() => setShowLoginForm(!showLoginForm)} // Muestra el formulario al hacer clic
//               >
//                 Iniciar Sesion
//               </a>
//               {showLoginForm && (
//                 <div className="login-form">
//                   <FormularioInicioSesion onLogin={handleLogin} />
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="avatar-dropdown" style={{ marginLeft: 'auto' }}>
//               <div
//                 className="avatar"
//                 style={{
//                   borderRadius: '50%',
//                   width: '50px',
//                   height: '50px',
//                   backgroundImage: 'url(https://via.placeholder.com/50)',
//                   cursor: 'pointer'
//                 }}
//                 title={`Logged in as ${username}`}
//               ></div>
//               <div className="dropdown-content">
//                 <p>{username}</p>
//                 <button id="cerrar-sesion" className="btn btn-danger" onClick={handleLogout}>
//                   Cerrar sesión
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Body;
