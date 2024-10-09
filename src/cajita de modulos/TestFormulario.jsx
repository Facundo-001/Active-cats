import React, { useState } from 'react';
// Importamos componentes de Material UI que vamos a usar
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TestFormulario = () => {
    // Hooks de estado para capturar el nombre de usuario, la contraseña y la foto
    const [username, setUsername] = useState(''); // Estado para almacenar el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para almacenar la contraseña
    const [photo, setPhoto] = useState(''); // Estado para almacenar la URL de la foto (si lo necesitas)

    // Estado para manejar si se muestra la información después del envío
    const [showInfo, setShowInfo] = useState(false);

    // Función que se ejecuta cuando el formulario es enviado
    const handleSubmit = (event) => {
        event.preventDefault(); // Evitamos que la página se recargue al enviar el formulario

        // Aquí puedes agregar la lógica para manejar el envío de los datos
        console.log("Nombre de usuario:", username);
        console.log("Contraseña:", password);

        // Después de enviar el formulario, mostramos la información
        setShowInfo(true);

        // Reseteamos los campos del formulario después del envío
        setUsername('');
        setPassword('');
        setPhoto(''); // Si estás usando una foto
    };

    return (
        // Caja que contiene todo el formulario y establece el diseño general
        <Box
        className="bg-dark d-flex justify-content-center align-items-center vh-100"
        sx={{
            backgroundColor: '#121212', // Fondo oscuro
            height: '100vh', // Altura del 100% de la vista
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
        {/* El formulario en sí mismo */}
        <Box
            component="form" // Definimos que este Box actúa como un formulario
            onSubmit={handleSubmit} // Asociamos la función que maneja el evento de envío
            sx={{
            backgroundColor: '#1c1c1c', // Fondo negro
            padding: 4, // Espaciado interno
            borderRadius: 2, // Bordes redondeados
            boxShadow: 3 // Sombra alrededor del formulario
            }}
            noValidate // Desactiva la validación HTML por defecto
            autoComplete="off" // Desactiva el autocompletado del navegador
        >
            {/* Título del formulario */}
            <Typography variant="h4" component="h3" sx={{ color: '#03a9f4', marginBottom: 2 }}>
            Iniciar Sesión
            </Typography>

            {/* Campo de texto para el nombre de usuario */}
            <TextField
            id="user" // Identificador único del campo
            label="Nombre de usuario" // La etiqueta que aparece en el campo
            variant="filled" // Variante de diseño "filled" (relleno)
            fullWidth // Ocupa el 100% del ancho disponible
            value={username} // Asignamos el valor del campo al estado `username`
            onChange={(e) => setUsername(e.target.value)} // Actualizamos el estado cuando el usuario escribe
            sx={{
                marginBottom: 2, // Espaciado inferior
                backgroundColor: '#2a2a2a', // Fondo oscuro para el campo de texto
                input: { color: 'white' } // Color del texto dentro del input
            }}
            />

            {/* Campo de texto para la contraseña */}
            <TextField
            id="password" // Identificador único del campo
            label="Contraseña" // Etiqueta que aparece en el campo
            type="password" // Tipo de campo para ocultar los caracteres
            variant="filled" // Variante de diseño "filled"
            fullWidth // Ocupa el 100% del ancho disponible
            value={password} // Asignamos el valor del campo al estado `password`
            required
            onChange={(e) => setPassword(e.target.value)} // Actualizamos el estado cuando el usuario escribe
            sx={{
                marginBottom: 2, // Espaciado inferior
                backgroundColor: '#2a2a2a', // Fondo oscuro para el campo de texto
                input: { color: 'white' } // Color del texto dentro del input
            }}
            />

            {/* Campo de texto para la URL de la foto */}
            <TextField
            id="photo" // Identificador único del campo
            label="URL de la foto" // Etiqueta que aparece en el campo
            variant="filled" // Variante de diseño "filled"
            fullWidth // Ocupa el 100% del ancho disponible
            value={photo} // Asignamos el valor del campo al estado `photo`
            onChange={(e) => setPhoto(e.target.value)} // Actualizamos el estado cuando el usuario escribe
            required
            sx={{
                marginBottom: 2, // Espaciado inferior
                backgroundColor: '#2a2a2a', // Fondo oscuro para el campo de texto
                input: { color: 'white' } // Color del texto dentro del input
            }}
            />

            {/* Botón de inicio de sesión */}
            <Stack direction="row" justifyContent="center">
            <Button variant="contained" color="primary" size="large" type="submit">
                Iniciar Sesión
            </Button>
            </Stack>
        </Box>

        {/* Mostramos la información después de que el formulario ha sido enviado */}
        {showInfo && (
            <Box mt={4} className="d-flex flex-column align-items-center">
                <img src={photo || 'https://via.placeholder.com/150'} alt="Foto de perfil" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                <p className="text-white">Nombre de usuario: {username}</p>
                <p className="text-white">Contraseña: {password.replace(/./g, '*')}</p>
            </Box>
        )}
        </Box>
    );
};

export default TestFormulario;
