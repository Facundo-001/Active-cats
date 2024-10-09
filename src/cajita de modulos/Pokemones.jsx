import React, { useState, useEffect } from 'react';

const Pokemones = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(5);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            try {
                const pokemonIds = Array.from({ length: 120 }, () => getRandomInt(1, 152));
                const pokemonData = await Promise.all(
                    pokemonIds.map(async (id) => {
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                        const data = await response.json();
                        return {
                            img: data.sprites.other['official-artwork'].front_default,
                            nombre: data.name,
                            experiencia: data.base_experience,
                            hp: data.stats[0].base_stat,
                            ataque: data.stats[1].base_stat,
                            defensa: data.stats[2].base_stat,
                            especial: data.stats[3].base_stat,
                        };
                    })
                );
                setPokemons(pokemonData);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    // Filtrar Pokémon por término de búsqueda
    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Paginación
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const totalPages = Math.ceil(filteredPokemons.length / pokemonsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Estilos en línea para la paginación
    const paginationStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '5px'
    };

    return (
        <div className="container my-5">
            {loading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar Pokémon..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        {currentPokemons.map((pokemon, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-4">
                                <div className="card text-center">
                                    <img src={pokemon.img} className="card-img-top" alt={pokemon.nombre} />
                                    <div className="card-body">
                                        <h5 className="card-title">{pokemon.nombre.toUpperCase()}</h5>
                                        <p className="card-text">Experiencia: {pokemon.experiencia}</p>
                                        <p className="card-text">HP: {pokemon.hp}</p>
                                        <p className="card-text">Ataque: {pokemon.ataque}</p>
                                        <p className="card-text">Defensa: {pokemon.defensa}</p>
                                        <p className="card-text">Especial: {pokemon.especial}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav>
                        <ul className="pagination" style={paginationStyle}>
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                                    Anterior
                                </button>
                            </li>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => paginate(i + 1)}>
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                                    Siguiente
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            )}
        </div>
    );
};

export default Pokemones;
