import PresentationCard from './PresentationCard';
import Temporizador from './temporizador/Temporizador';
import Counter from './counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Hola mundo, soy Ceci la proxima  programadora Full Stack ♥</p>
      <PresentationCard/>
      <Counter/>
      <Temporizador/>
    </div>
  );
}

export default App;
