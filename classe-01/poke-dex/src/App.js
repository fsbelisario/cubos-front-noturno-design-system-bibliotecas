import './App.css';
import { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use'
import Navbar from './components/Navbar';
import ContentCard from './components/ContentCard';
import SearchForm from './components/SearchForm';
import SearchAlert from './components/SearchAlert';

function App() {
  const [cache, setCache, removeCache] = useLocalStorage('pokemonSearch', []);

  const [pokemon, setPokemon] = useState({});
  const [search, setSearch] = useState('');
  const [displayAlert, setDisplayAlert] = useState(false);

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    updateCache();
  }, [pokemon]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, [displayAlert]);

  function verifyCache() {
    return cache.find(item => item.name === search);
  };

  function updateCache() {
    if (!cache.find(item => item.name === search)) {
      setCache([...cache, pokemon]);
    }
  };

  async function handleSearch() {
    setDisplayAlert(false);
    const searchResult = verifyCache();
    if (searchResult) {
      return setPokemon(searchResult);
    }
    await handleRequestPokemonAPI();
  };

  async function handleRequestPokemonAPI() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search || 'pikachu'}`);
      const { name, sprites: { other: { dream_world: { front_default } } }, abilities } = await response.json();

      const currentPokemon = {
        name,
        image: front_default,
        abilities
      }
      setPokemon(currentPokemon);
    } catch (error) {
      console.log(error);
      setDisplayAlert(true);
      setSearch('');
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <ContentCard name={pokemon.name} image={pokemon.image} abilities={pokemon.abilities} />
        <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch} />
        {displayAlert && <SearchAlert />}
      </div>

    </div>
  );
}

export default App;