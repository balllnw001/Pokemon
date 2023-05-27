import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=104');
                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        };

        fetchData();
    }, []);

    const extractPokemonId = (url) => {
        const matches = url.match(/(\d+)\/$/);
        return matches ? matches[1] : null;
    };

    console.log(pokemonList);
    return (
        <div className="pokelist">
            {pokemonList.map((pokemon) => (
                <div className="card">
                    <p>{pokemon.name}</p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonId(pokemon.url)}.png`} alt={pokemon.name} />
                </div>
            ))}
        </div>
    );
};

export default PokemonList;