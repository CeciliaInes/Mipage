import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagenAvatar from '../assets/profile.png';
import documentCV from '../assets/Cecilia_Castaneda_CV.pdf';
import imageLogo from '../assets/logo_ceci.png';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
    const navigation = [
        { name: 'HOLA', href: '#hola', current: true },
        { name: 'PROYECTOS', href: '#proyectos', current: true },
        { name: 'HABLEMOS', href: '#hablemos', current: true },
    ]

function Headerceci() {
    let name = "Cecilia";
    let linkedin = "https://www.linkedin.com/in/ines-castañeda-886a46212";
    let twitter = "https://twitter.com/cecixna";
    let gmail = "mailto:inescastaneda885@gmail.com";
    
  return (
    // Contenedor padre 
    <div id='hola' className='container'>
        <div className="mx-auto opacity-1">
            <div className='grid grid-cols-3 gap-3 mx-auto h-20'>
                <div className="center">
                    <img alt='logo' width={250} src={imageLogo}></img>
                </div>
                <div className="hidden lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=  ' text-black no-underline hover:text-gray-500 px-3 py-2 text-md font-medium'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <a download={true} type='download' className='text-center' href={documentCV}>
                    <button className='hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-lg text-sm '>
                    DESCARGAR CURRICULUM
                    </button>
                </a>
            </div>

            <div className="sm:flex container sm:flex-row-reverse  gap-5 pt-8 pb-8">
                
                <div className='sm:flex-1 '>
                    <img className='' width={500} alt='Foto Cecilia' src={imagenAvatar}></img>
                </div>
                <div className='align-self-center sm:flex-1'>
                    <p className='text-3xl font-normal'>¡Hola a todos!</p>
                    <p className='text-5xl font-normal'>Soy {name}</p>
                    <p className='text-md'>Me siento muy feliz
                    de que hayas podido llegar a mi espacio<br></br> personal
                    y que me puedas conocer profesionalmente.</p>
                    <div className='flex flex-row gap-3'> 
                        <a href={gmail} className='text-black'> <FontAwesomeIcon className='icon-gen border-2 animate border-black hover:scale-90' icon={faEnvelope} size="md"/></a>
                        <FontAwesomeIcon  className='icon-gen border-2 animate border-black hover:scale-90' icon={faPhone} size="md"/>
                        <a target='blank' href={linkedin} className='text-black'><FontAwesomeIcon  className='icon-gen border-2 animate border-black hover:scale-90' icon={faLinkedin} size="md"/></a>              
                        <a target='blank' href={twitter} className='text-black'><FontAwesomeIcon className='icon-gen border-2 animate border-black hover:scale-90' icon={faTwitter} size="md"/></a>                
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  ); 
}

export default Headerceci;