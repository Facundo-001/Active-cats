import React, { useState, useEffect } from 'react';

const TST_TS: React.FC = () => {
    // Estado para guardar el tiempo en segundos
    const [tiempo, setTiempo] = useState<number>(0);
    // Estado para determinar si el cronómetro está corriendo
    const [corriendo, setCorriendo] = useState<boolean>(false);

    // useEffect que se encarga de incrementar el tiempo cada segundo cuando el cronómetro está corriendo
    useEffect(() => {
        let intervalo: NodeJS.Timeout;
        if (corriendo) {
            intervalo = setInterval(() => {
                setTiempo(t => t + 1); // Incrementa el tiempo en 1 cada segundo
            }, 1000);
        }
        // Limpia el intervalo cuando el componente se desmonta o cuando se detiene el cronómetro
        return () => clearInterval(intervalo);
    }, [corriendo]);

    // Función para iniciar el cronómetro
    const iniciarCronometro = () => setCorriendo(true);
    // Función para detener el cronómetro
    const detenerCronometro = () => setCorriendo(false);
    // Función para reiniciar el cronómetro
    const reiniciarCronometro = () => {
        setCorriendo(false);
        setTiempo(0);
    };

    // Función para formatear el tiempo en formato de minutos y segundos
    const formatearTiempo = (segundos: number): string => {
        const minutos = Math.floor(segundos / 60);
        const seg = segundos % 60;
        return `${minutos}:${seg < 10 ? `0${seg}` : seg}`;
    };

// SEPARADOR

    const [numero,setnumero] = useState<number>(0);

    const sumar = () =>{
        setnumero(numero+1);
    };

    // SEPARADOR
    const [valorInput, setValorInput] = useState<string>("");

    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValorInput(e.target.value);
    };

    return (
        <>
            <h3 className='text-center alert mt-3 alert-info'>Nivel de dificultad: Intermedio</h3>
            <div className="text-center bg-dark text-white">
                <h2>Cronómetro</h2>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                    {formatearTiempo(tiempo)} {/* Muestra el tiempo formateado */}
                </div>
                <button className="btn btn-success m-2" onClick={iniciarCronometro}>
                    Iniciar
                </button>
                <button className="btn btn-warning m-2" onClick={detenerCronometro}>
                    Detener
                </button>
                <button className="btn btn-danger m-2" onClick={reiniciarCronometro}>
                    Reiniciar
                </button>
            </div>
            <h3 className='text-center alert mt-3 alert-success'>Nivel de dificultad: Basico</h3>
                <div className='text-center bg-dark flex-wrap d-flex justify-content-center flex-column'>
                    <h3 className=' text-success'>Sumar 1 al 0</h3>
                    <span className='text-danger h2 m-3'>{numero}</span>
                    <button className='btn btn-success m-3' onClick={sumar}>Aumentar</button>
                </div>
            <h3 className='text-center alert mt-3 alert-success'>Nivel de dificultad: ????</h3>
                <div>
                    <input type="text" value={valorInput} placeholder='Usuario' maxLength={10}></input>
                    <input type="text" value={valorInput} placeholder='Palabra' maxLength={15}></input>
                    <button>Crear targeta</button>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
        </>
    );
};

export default TST_TS;
