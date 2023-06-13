import { useState } from "react";
function Counter(){
    //El estado de este componente
    const [count, setCount] = useState(0); 
    return (
        <div>
            <p>Haz hecho click {count}  a este boton </p>
            <button onClick={()=> setCount(count+1)}>Haz click</button>
        </div>
    );
}

export default Counter;