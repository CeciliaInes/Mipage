import { createContext, useContext, useEffect, useState } from "react";
import frameworksList from "../filter/items";
import { SearchContext } from "./SearchContext";

export const ItemsContext = createContext([]);

export function ItemsProvider ({children}){
    let [items, setItmes] = useState(frameworksList);
    let { search } = useContext(SearchContext);

    useEffect(function(){
        if(!search || search === "") {
            setItmes(frameworksList);
            return;
        }; 
        filterItems(search);
    }, [search]);

    function filterItems(searchPattern){
        let newItems = filterItemsBySearchPattern(searchPattern);
            setItmes(newItems);
    }
    function filterItemsBySearchPattern(searchPattern){
        let filterItems = frameworksList
            .map(item =>item.toLowerCase().includes(searchPattern.toLowerCase())? item: null)
        return filterItems;
    }

    return(
        <ItemsContext.Provider value={ items}>
            {children}
        </ItemsContext.Provider>
    )
}