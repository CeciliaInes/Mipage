import { useContext } from "react";
import Searchinput from "../form/Searchinput";
import { ItemsContext } from "../contexts/ItemsContext";
import ResultCounts from "./ResultCounts";

//Las funciones componentes reciben los props y se muestran en esta funcion
function ListView(){
    let elements = useContext(ItemsContext);
    return (
        <>
            <Searchinput/>
            <ResultCounts/>
            <ul>
                {
                  elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
                }
            </ul>
        </>
    )
}

export default ListView;