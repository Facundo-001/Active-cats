    import { useState } from "react";

    function FormularioInicioSesion({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
        onLogin(username); // Pasar el nombre de usuario al componente padre
        } else {
        alert("Por favor, rellena todos los campos");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">
            Nombre de usuario
            </label>
            <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">
            Contraseña
            </label>
            <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit" className="btn btn-primary">
            Iniciar Sesión
        </button>
        </form>
    );
    }

    export default FormularioInicioSesion;
