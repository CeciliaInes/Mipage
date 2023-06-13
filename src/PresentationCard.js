
import imagenAvatar from './assets/foto-ceci.jpg';
function PresentationCard(){
    let name= 'Cecilia';

    return(
        <div className="presentation-card">
            <img src={imagenAvatar} alt='Avatar' className='imgAvatar'/>
            <h1>
                Hola, soy {name} y estoy aprendiendo React
            </h1>
        </div>    

    );

}

export default PresentationCard;