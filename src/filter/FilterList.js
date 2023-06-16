 import ListView from "./ListView";
 import SearchProvider from "../contexts/SearchContext";
import { ItemsProvider } from "../contexts/ItemsContext";
//Prop drilling
//Es un componentes contenedores porque se encarga de tener el código detras pero aqui no se muestra la lista.

function FilterList(){
    

    return (
        
        <SearchProvider>
            <ItemsProvider>
                <ListView/>
            </ItemsProvider>
        </SearchProvider>
        
       
    )
}


export default FilterList;