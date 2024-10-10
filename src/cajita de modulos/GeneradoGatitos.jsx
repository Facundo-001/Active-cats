    import React, { useState, useEffect } from 'react';

    // Componente que consumirá la API de TheCatAPI
    function CatGallery() {
    // Estado para almacenar las imágenes de los gatos
    const [catImages, setCatImages] = useState([]);
    // Estado para manejar si el componente está cargando
    const [loading, setLoading] = useState(true);
    // Estado para manejar posibles errores
    const [error, setError] = useState(null);

    // Función asíncrona para obtener las imágenes desde la API
    const fetchCatImages = async () => {
        try {
        // Realizando la petición a la API con el método fetch
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        
        // Verificar si la respuesta es correcta (código de estado 200-299)
        if (!response.ok) {
            throw new Error('Error al cargar las imágenes de gatos');
        }

        // Parsear la respuesta a formato JSON para obtener los datos
        const data = await response.json();

        // Actualizar el estado con las imágenes obtenidas
        setCatImages(data);

        // Cambiar el estado de loading a false una vez que las imágenes se carguen
        setLoading(false);
        } catch (err) {
        // Si ocurre un error, capturamos el error y lo almacenamos en el estado
        setError(err.message);
        setLoading(false);
        }
    };

    // useEffect para realizar la petición a la API cuando el componente se monta
    useEffect(() => {
        // Llamamos a la función para obtener las imágenes
        fetchCatImages();
    }, []); // [] asegura que el efecto solo se ejecute una vez, al montar el componente

    // Si hay un error, mostramos un mensaje de error
    if (error) {
        return <p>Ocurrió un error: {error}</p>;
    }

    // Si está cargando, mostramos un mensaje de carga
    if (loading) {
        return <div className="alert alert-info"><p>Cargando imágenes de gatitos...</p></div>; 
    }

    // Renderizamos las imágenes cuando ya están disponibles
    return (
        <div className="p-3">
        <h2 style={{textAlign: 'center'}}>Galería de Gatitos</h2>

        {/* Botón para actualizar las imágenes */}
        <button onClick={fetchCatImages} className="btn btn-primary mb-3">Actualizar Fotos</button>

        {/* Galería de imágenes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {/* Iteramos sobre el array de imágenes y mostramos cada imagen */}
            {catImages.map((cat, index) => (
            <div key={index}>
                <img
                src={cat.url}
                alt={`Cat ${index + 1}`}
                style={{ width: '100%', borderRadius: '8px' }}
                />
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default CatGallery;







// import React, { useState, useEffect } from 'react';

// // Componente principal que interactúa con The Cat API
// function CatGallery() {
//   // Estado para almacenar las imágenes obtenidas de la API
//   const [catImages, setCatImages] = useState([]);
//   // Estado para manejar si estamos cargando los datos de la API
//   const [loading, setLoading] = useState(false);
//   // Estado para manejar posibles errores en la solicitud a la API
//   const [error, setError] = useState(null);
//   // Estado para almacenar el límite de imágenes que se desea obtener
//   const [limit, setLimit] = useState(10); // Por defecto pedimos 10 imágenes
//   // Estado para almacenar la información de una imagen específica por su ID
//   const [imageById, setImageById] = useState(null);

//   // Función que realiza la solicitud a la API de gatos
//   const fetchCatImages = async () => {
//     setLoading(true); // Indicamos que los datos están cargando
//     setError(null); // Reiniciamos cualquier error previo

//     try {
//       // Realizamos la petición GET a la API para obtener imágenes de gatos
//       const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
      
//       // Verificamos si la respuesta fue exitosa (códigos 200-299)
//       if (!response.ok) {
//         throw new Error('Error al obtener imágenes de gatos.');
//       }

//       // Parseamos la respuesta en formato JSON
//       const data = await response.json();

//       // Actualizamos el estado con las imágenes obtenidas
//       setCatImages(data);

//       // Terminamos la carga
//       setLoading(false);
//     } catch (err) {
//       // Si hay un error, lo almacenamos en el estado de error
//       setError(err.message);
//       setLoading(false); // Terminamos la carga aunque haya error
//     }
//   };

//   // Función que obtiene una imagen por su ID específico
//   const fetchImageById = async (id) => {
//     setLoading(true);
//     setError(null);

//     try {
//       // Realizamos la petición a la API para obtener una imagen por su ID
//       const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);

//       if (!response.ok) {
//         throw new Error('No se pudo obtener la imagen con ID especificado.');
//       }

//       const data = await response.json();
//       setImageById(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   // useEffect para realizar la primera carga de imágenes cuando el componente se monta
//   useEffect(() => {
//     fetchCatImages(); // Obtenemos las imágenes al cargar el componente
//   }, [limit]); // Se ejecutará de nuevo cada vez que cambie el límite de imágenes

//   // Si estamos cargando, mostramos un mensaje de carga
//   if (loading) {
//     return <p>Cargando imágenes de gatos...</p>;
//   }

//   // Si ocurrió un error, mostramos el mensaje de error
//   if (error) {
//     return <p>Ocurrió un error: {error}</p>;
//   }

//   return (
//     <div>
//       <h2>Galería de Gatos</h2>

//       {/* Input para cambiar el límite de imágenes a mostrar */}
//       <div>
//         <label>Seleccionar límite de imágenes: </label>
//         <input
//           type="number"
//           min="1"
//           max="100"
//           value={limit}
//           onChange={(e) => setLimit(e.target.value)} // Actualizamos el límite de imágenes
//         />
//         <button onClick={fetchCatImages}>Actualizar imágenes</button>
//       </div>

//       {/* Botón para buscar una imagen específica por ID */}
//       <div>
//         <label>Buscar imagen por ID:</label>
//         <input
//           type="text"
//           placeholder="Introduce el ID de la imagen"
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               fetchImageById(e.target.value); // Buscar imagen por ID al presionar Enter
//             }
//           }}
//         />
//       </div>

//       {/* Mostrar una imagen específica por ID si existe */}
//       {imageById && (
//         <div>
//           <h3>Imagen obtenida por ID</h3>
//           <img src={imageById.url} alt="Imagen por ID" style={{ width: '300px', borderRadius: '8px' }} />
//         </div>
//       )}

//       {/* Mostrar imágenes de gatos en una cuadrícula */}
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
//         {catImages.map((cat, index) => (
//           <div key={index}>
//             <img src={cat.url} alt={`Gato ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CatGallery;
