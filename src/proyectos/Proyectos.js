import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project1 from '../assets/projectOne.png';
import imgInes from '../assets/perfil.jpg';
 
function Proyectos(){
    return(
    <div id="proyectos">
        <div className="mx-auto mt-40 w-3/5 mb-40">
            <p className="text-md  text-center">A lo largo de mi carrera como frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</p>
            <p className="font-semibold text-center">Aquí hay algunos que me gustaría compartir.</p>
            <div className="mx-auto w-max">
                <FontAwesomeIcon size="2xl" className="animate trasition duration-200 animate-bounce" icon={faArrowDown}></FontAwesomeIcon>
            </div>
        </div>
        
        {/* Item 1 de proyectos */}
        <div>
            <div  className="sm:flex sm:w-4/6 container gap-x-10 sm:flex-row-reverse mb-40">
                <div className="sm:flex-1 my-4">
                    <img alt="project1" src={project1}></img>
                </div>
                <div className="sm:flex-1 my-4  align-self-center">
                    {/* TITULO */}
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-indigo-400 px-2">inesdev.com</h4>
                        </div>
                    </div>
                    <p>Accede a mi proyecto de libros digitales, hecho con HTML, CSS Y JAVASCRIPT</p>
                    <div className="gap-3 flex">
                        <button className='hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-md text-sm '>
                            Ver proyecto
                        </button>
                        <button className='hover:scale-90 px-3 py-2 duration-300 border-black border-2 cursor-pointer rounded-3xl shadow-md text-sm '>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  Ver código
                        </button>
                    </div>
                </div>
            </div>
            <div className="container bg-white-op rounded-lg py-16 mb-40">
                <img className="w-16 rounded-full mx-auto mb-3" alt="text" src={imgInes}></img>
                <h4 className="text-center mb-3">"Realizar este diseño para presentar mis proyectos ha sido enriquecedor, 
                ya que es la primera vez que utilizo TailwindCSS, he aprendido a utilizar unos 
                de los frameworks más populares y excelentes para crear diseños webs."</h4>
                <h5 className="text-center text-gray-600">CECILIA CASTAÑEDA / DESARROLLADORA DE SOFTWARE / ANALISTA DE DATOS</h5>
            </div>
        </div>

        {/* Item 2 de proyectos */}
        <div>
            <div  className="sm:flex sm:w-4/6 container gap-x-10 flex-row mb-40">
                <div className="sm:flex-1 my-4">
                    <img alt="project1" src={project1}></img>
                </div>
                <div className="sm:flex-1 my-4  align-self-center">
                    {/* TITULO */}
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-indigo-400 px-2">Multimedia</h4>
                        </div>
                    </div>
                    <p>Accede a mi proyecto de libros digitales, hecho con HTML, CSS Y JAVASCRIPT</p>
                    <div className="gap-3 flex">
                        <button className='hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-md text-sm '>
                            Ver proyecto
                        </button>
                        <button className='hover:scale-90 px-3 py-2 duration-300 border-black border-2 cursor-pointer rounded-3xl shadow-md text-sm '>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  Ver código
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="container bg-white-op rounded-lg py-16 mb-40">
                <img className="w-16 rounded-full mx-auto mb-3" alt="text" src={imgInes}></img>
                <h4 className="text-center mb-3">"Realizar este diseño para presentar mis proyectos ha sido enriquecedor, 
                ya que es la primera vez que utilizo TailwindCSS"</h4>
                <h5 className="text-center text-gray-600">VANESA RUBIÑOS / DISEÑADORA GRÁFICA / CEO DE IBELLA GROUP</h5>
            </div>
        </div>

        {/* Item 3 de proyectos */}
        <div>
            <div  className="sm:flex sm:w-4/6 container gap-x-10 sm:flex-row-reverse mb-40">
                <div className="sm:flex-1 my-4">
                    <img alt="project1" src={project1}></img>
                </div>
                <div className="sm:flex-1 my-4  align-self-center">
                    {/* TITULO */}
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-indigo-400 px-2">GRID GALLERY</h4>
                        </div>
                    </div>
                    <p>Accede a mi proyecto de Galeria utilizando Grid Content</p>
                    <div className="gap-3 flex">
                        <button className='hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-md text-sm '>
                            Ver proyecto
                        </button>
                        <button className='hover:scale-90 px-3 py-2 duration-300 border-black border-2 cursor-pointer rounded-3xl shadow-md text-sm '>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  Ver código
                        </button>
                    </div>
                </div>
            </div>
            <div className="container bg-white-op rounded-lg py-16 mb-40">
                <img className="w-16 rounded-full mx-auto mb-3" alt="text" src={imgInes}></img>
                <h4 className="text-center mb-3">"Realizar este diseño para presentar mis proyectos ha sido enriquecedor, 
                ya que es la primera vez que utilizo TailwindCSS"</h4>
                <h5 className="text-center text-gray-600">ALEJANDRA HILDEBRANDT / DISEÑADORA GRÁFICA / CEO DE AGLAYA Y CUTEBRANDT</h5>
            </div>
        </div>
    </div>
    )
}

export default Proyectos;