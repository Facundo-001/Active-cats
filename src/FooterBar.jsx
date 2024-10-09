import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// Eliminamos la constante innecesaria FTB ya que no es requerida en este caso.

function FooterBar() {
    return (
        <>
            {/* El footer utiliza Bootstrap para ser responsivo */}
            <footer id="Ftb" className='sticky-bottom footer bg-light text-center py-3'>
                <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center align-items-center mb-0">
                    {/* Este elemento es responsivo y se centra vertical y horizontalmente en pantallas pequeñas y medianas */}
                    <li className="mx-4 my-2 my-md-0">Todos los derechos reservados para <span className='fw-bold'>Active Files</span></li>
                    
                    {/* El Stack de Material UI ayuda con el espaciado de los botones */}
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} className="mx-4 my-2 my-md-0">
                        <li>
                            <Button href='https://www.youtube.com/@SpecGhostTMF' variant="contained" size="small">
                                Mi canal de YouTube
                            </Button>
                        </li>
                        <li>
                            <Button href='#' variant="contained" size="small">
                                Discord
                            </Button>
                        </li>
                        <li>
                        <Link to="/Preguntas-Frecuentes">
                            <Button href='#' variant="contained" size="small">
                                Dudas Frecuentes
                            </Button>
                        </Link>
                        </li>
                    </Stack>
                </ul>
            </footer>
        </>
    );
}

export default FooterBar;
