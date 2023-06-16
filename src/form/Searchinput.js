import { useContext } from "react";
import {SearchContext} from "../contexts/SearchContext";

function Searchinput(){
    const {setSearch} = useContext(SearchContext);
     return (
        
        <input type="text" onChange={ev => setSearch(ev.target.value)}/>
      
    )
}

export default Searchinput;