// import PresentationCard from './PresentationCard';
// import Temporizador from './temporizador/Temporizador';
// import Counter from './counter/Counter';
import Headerceci from './header/Headerceci';
import Proyectos from './proyectos/Proyectos';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Hablemos from './hablemos/Hablemos';

// import FilterList from './filter/FilterList';
// import TooltipText from './tooltip/TooltipText';
// import Formulario from './formulario/Formulario';


function App() {
  return (
    <div className="bg-gradient-to-tr min-h-screen from-pink-200 via-pink-300 to-pink-400 pt-9 pb-9">
      {
        
        <><Headerceci/><Proyectos/><Hablemos/></>
      }
    </div>
    
  );
}

export default App;


/* <p>Hola mundo, soy Ceci la proxima  programadora Full Stack ♥</p>
      <PresentationCard/>
      <Counter/>
      <Temporizador/>
          <FilterList/>
      <div>
        <p>Lorem este es mi tezto pero aqui quiero poner el <TooltipText tooltip={"Mensaje del Tooltip"}>tooltip</TooltipText>
         Lorem este es mi tezto pero aqui quiero poner el <TooltipText tooltip={"Dice hola"}>Este es un mensaje</TooltipText></p>
      </div>

      <Formulario></Formulario> */
    // HAcer un json en donde mi experiencia, trabajo y estudio y desde ahi jalar para mi web