import PresentationCard from './PresentationCard';
import Temporizador from './temporizador/Temporizador';
import Counter from './counter/Counter';
import './App.css';
import FilterList from './filter/FilterList';
import TooltipText from './tooltip/TooltipText';
import Formulario from './formulario/Formulario';

function App() {
  return (
    <div className="App">
      <p>Hola mundo, soy Ceci la proxima  programadora Full Stack ♥</p>
      <PresentationCard/>
      <Counter/>
      <Temporizador/>
      <FilterList/>
      <>
        <p>Lorem este es mi tezto pero aqui quiero poner el <TooltipText tooltip={"Mensaje del Tooltip"}>tooltip</TooltipText>
         Lorem este es mi tezto pero aqui quiero poner el <TooltipText tooltip={"Dice hola"}>Este es un mensaje</TooltipText></p>
      </>

      <Formulario></Formulario>
    </div>
  );
}

export default App;
