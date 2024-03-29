import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import { SearchContext } from "../contexts/SearchContext";

function ResultCounts(){
    const elements = useContext(ItemsContext);
    const {search} = useContext(SearchContext);
    return(
        <p> Se encontraron {elements.filter(el => !!el).length} elementos para la búsqueda '{search}'
        </p>
    )
}

export default ResultCounts;