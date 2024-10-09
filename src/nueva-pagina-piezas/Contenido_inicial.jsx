import React from 'react';
import './style.css'
import './style-fondo.css'

const Contenido_inicial = () => {
    return (
        <div className="your-class-name d-flex flex-column justify-content-center align-items-center vh-100 text-white text-center">
            <h1 className="display-4">
            <img
                        className="rounded-2"
                        style={{marginRight: '4px'}}
                        width="45"
                        height="45"
                        src="https://st4.depositphotos.com/11498520/22526/v/450/depositphotos_225265782-stock-illustration-cat-vector-kitten-calico-icon.jpg" alt="" />
                Bienvenido A Mi Sitio Web Active Cats
                <img
                        className="rounded-2"
                        style={{marginLeft: '4px'}}
                        width="45"
                        height="45"
                        src="https://st4.depositphotos.com/11498520/22526/v/450/depositphotos_225265782-stock-illustration-cat-vector-kitten-calico-icon.jpg" alt="" /></h1>
            <p className="lead">
                Nos encargamos en esta página de recopilar varias cosas y mostrarlas aquí, entre todas esas: juegos, aviones, etc.
            </p>
            {/* <img
                src="https://static.videezy.com/system/resources/thumbnails/000/005/014/original/magical-nebula-4k-motion-background.jpg"
                alt="Descripción"
                className="img-fluid image-hover"
            /> */}
            <img
                src="https://i.pinimg.com/originals/2a/02/0b/2a020bc8bd7ee3cf027bd90187b8698e.gif"
                alt="Gato activo"
                className="img-fluid rounded-2"
            />
            <p className='lead'>
                Espero les guste el contenido no es mucho pero me tome mi tiempo para hacer este sitio
            </p>
        </div>
    );
};
//     const SobreMi = () => {
//         return <h2>Sobre Mí: Información personal o detalles sobre el autor</h2>;
//     };
    
//     const Contacto = () => {
//         return <h2>Contacto: Aquí puedes dejar tus datos de contacto</h2>;
//     };

// export {SobreMi,Contacto}
export default Contenido_inicial;
