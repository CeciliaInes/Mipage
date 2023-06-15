import { useState, useEffect } from "react";

function Temporizador(){
    //targetSeconds, 
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsetSeconds, setElapsetSeconds] = useState(0);

    //Dentro de useEffect podemos colocar funciones de javascript
    useEffect(function(){
        if(targetSeconds === null) return;
        //target seconds ya tiene un valor
        setElapsetSeconds(0);

       let interval =  setInterval(function(){
        setElapsetSeconds((elapsetSeconds) => elapsetSeconds+1)
       },1000);

       return ()=>{
        clearInterval(interval);
       }
    },[targetSeconds]);

    function parseForm(ev){
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }
    
    if(elapsetSeconds >= targetSeconds && targetSeconds !== null){ 
        return (
            <div>
                <p>El temporizador termino</p>
                <button onClick={()=>setTargetSeconds(null)}>Reiniciar</button>
            </div>
        );
    }

    if(targetSeconds !== null){ 
        return (
            <p>Faltan {targetSeconds -elapsetSeconds } segundos.</p>
        )
    }
    

    return( 
        <div>
            <p>¿Cuántos segundos quieres contar?</p>
            <form action="#" onSubmit={ev =>parseForm(ev)}>
                <input type="number" name="seconds"/>
                <button>Iniciar</button>
            </form>
        </div>
    );


}

export default Temporizador;