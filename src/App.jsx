// // Confuguracion Nueva Probando ventanas dinamicas tipo hoja o algo asi

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cajita_para_dibujar from './cajita de modulos/Cajita_para_dibujar';
// import ListaGatos from './cajita de modulos/nombreGatitos-Array';
// import Pokemones from './cajita de modulos/Pokemones';
// import Tienda from './cajita de modulos/Tienda';
// import FooterBar from './FooterBar';
// import Body from './navBar';
// import Contenido_Principal from './Contenido_Principal';
// import CatGallery from './cajita de modulos/GeneradoGatitos';
// import TestFormulario from './cajita de modulos/TestFormulario';
// import Preguntas_Frecuentes from './Preguntas_Frecuentes';
// import lista_de_tareas from './cajita de modulos/tareas_algo_complejas/lista_de_tareas';




// function App() {
//   // Definición de clases para las alertas
//   const Alertas = {
//     AlertaRoja: 'alert alert-danger',
//     AlertaCeleste: 'alert alert-info',
//   };


//   return (
//   <Router>
//     <div className="d-flex flex-column min-vh-100">
//     {/* <header className="bg-primary text-white text-center py-3"> */}
//         {/* <h1>Mi Aplicación</h1> */}
//         <Body/>
//     {/* </header> */}

//     <main className="flex-grow-1 bg-body-secondary">
//         {/* <div className="container py-5"> */}
//           {/* CONTENIDO CUAL SE MONSTRARA A BASE DE LO QUE SE SELECIONE EN EL BARDROP el cual estara en el nabvar(Body) */}
//             <Routes>
//               <Route exact path='/' element={<Contenido_Principal/>}/>
//               <Route path='/Preguntas-Frecuentes' element={<Preguntas_Frecuentes/>}/>
//               <Route path='/TestFormulario' element={<TestFormulario/>}/>
//               <Route path='/lista-propia' element={<lista_de_tareas />}/>
//               <Route path='/Galeria-gatitos' element={<CatGallery/>}/>
//               <Route path='/Cajita-para-dibujar' element={<Cajita_para_dibujar/>}/>
//               <Route path='/Libreria-de-pokemones-random' element={<Pokemones/>}/>
//               <Route path='/Tienda-mal-echa-XD' element={<Tienda/>}/>
//               <Route path='/leer-array-Gatos' element={<ListaGatos/>}/>
//             </Routes>
//             {console.log('TODO ESTA FUNCIONADO ESO SIGNIFICA DE QUE ANDA ROUTER :)')}
//         {/* </div> */}
//     </main>
//     <FooterBar /> {/* Footer siempre al fondo */}
//     </div>
//   </Router>
//   );
// }

// export default App;

// NUEVA PAGNA APARTE



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Barra_nav from './nueva-pagina-piezas/Barra_nav';
import Contenido_inicial from './nueva-pagina-piezas/Contenido_inicial';
import Pie_pagina from './nueva-pagina-piezas/Pie_pagina';
import Mis_Projectos from './nueva-pagina-piezas/modulos/Mis_Projectos';
import Barrita_cambiar from './nueva-pagina-piezas/Barrita_cambiar';
import Informacion from './nueva-pagina-piezas/modulos/Informacion'
import Esta_pagina_esta_hecha_de from './nueva-pagina-piezas/modulos/Esta_pagina_esta_hecha_de'
import Mi_nivel from './nueva-pagina-piezas/modulos/Mi_nivel'
import CatGallery from './cajita de modulos/GeneradoGatitos';
import Facciones from './nueva-pagina-piezas/modulos/Facciones';
import TST_TS from './nueva-pagina-piezas/modulos/TST_TS.tsx';



function App() {
  // Definición de clases para las alertas
  const Alertas = {
    AlertaRoja: 'alert alert-danger',
    AlertaCeleste: 'alert alert-info',
  };


  return (
  <Router>
    <div className="d-flex flex-column min-vh-100">
    {/* <header className="bg-primary text-white text-center py-3"> */}
        {/* <h1>Mi Aplicación</h1> */}
        <Barra_nav />
    {/* </header> */}
    <main className="flex-grow-1 ">
        <Contenido_inicial />
        <Barrita_cambiar />
        <Routes>
          <Route exact path='Active-cats/inicio/mis_projectos' element={<Mis_Projectos />}/>
          <Route path='Active-cats/Testeo-Zone/TypeScript' element={<TST_TS />}/>
          <Route path='Active-cats/Informacion-sobre-la-pagina' element={<Informacion />}/>
          <Route path='Active-cats/Facciones/Equipos/dead-ahead-warfare' element={<Facciones />}/>
          <Route path='Active-cats/Esta-pagina-hecha-de' element={<Esta_pagina_esta_hecha_de />}/>
          <Route path='Active-cats/Galeria-de-gatitos' element={<CatGallery />}/>
          <Route path='Active-cats/Mi-nivel-segun-yo' element={<Mi_nivel />}/>
        </Routes>
    </main>
    <Pie_pagina />
    </div>
  </Router>
  );
}

export default App;