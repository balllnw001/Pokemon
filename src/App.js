import "./App.css";
import PokemonList from './components/PokemonList'
import PokemonLogo from './img/International_Pokémon_logo.png'

const App = () => {
  return (
    <div className='App'>
      <img src={PokemonLogo} alt="" />
      <h1>Pokémon List </h1>
      {PokemonList()}
    </div>
  );
};

export default App;
