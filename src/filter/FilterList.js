import { useState } from "react";
import frameworksList from "./items";
import ListView from "./ListView";

//Es un componentes contenedores porque se encarga de tener el código detras pero aqui no se muestra la lista.

function FilterList(){
    let [items, setItmes] = useState(frameworksList);

    function filterItems (searchPattern){
        if (searchPattern === '') {
            setItmes(frameworksList);
        }else{
            let newItems = filterItemsBySearchPattern(searchPattern)
            setItmes(newItems);
        }
    }
    function filterItemsBySearchPattern(searchPattern){
        let filterItems = frameworksList
            .map(item =>item.toLowerCase().includes(searchPattern.toLowerCase())? item: null)
        return filterItems;
    }

    return (
        <>
        <ListView elements={items} funcFilterItems={filterItems}/>
        </>
    )
}


export default FilterList;