import React, { useRef, useState } from 'react';

const CajitaParaDibujar = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(5);

    // Comienza a dibujar
    const startDrawing = (e) => {
        setIsDrawing(true);
        draw(e);
    };

    // Deja de dibujar
    const stopDrawing = () => {
        setIsDrawing(false);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath(); // Resetear el trazo
    };

    // Función para dibujar
    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Configurar color y tamaño del pincel
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;

        // Dibujar en las coordenadas del mouse
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '20px' }}>Dibuja lo que quieras</h3>
            
            <canvas
                ref={canvasRef}
                width={400}
                height={400}
                style={{ border: '2px solid black', cursor: 'crosshair' }}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                onMouseLeave={stopDrawing}
            />

            <div style={{ marginTop: '20px' }}>
                <label style={{ marginRight: '10px' }}>Color:</label>
                <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                    style={{ marginRight: '20px' }}
                />

                <label style={{ marginRight: '10px' }}>Tamaño del pincel:</label>
                <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={brushSize} 
                    onChange={(e) => setBrushSize(e.target.value)} 
                />
                <span style={{ marginLeft: '10px' }}>{brushSize}px</span>
            </div>

            <ul style={{ marginTop: '20px', listStyleType: 'none', padding: '0' }}>
                <li>
                    <button 
                        onClick={() => {
                            const canvas = canvasRef.current;
                            const ctx = canvas.getContext('2d');
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                        }}
                        style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Borrar todo
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default CajitaParaDibujar;
