
//Las funciones componentes reciben los props y se muestran en esta funcion
function ListView({elements, funcFilterItems}){
    return (
        <>
            <input type="text" onChange={ev => funcFilterItems(ev.target.value)}/>
            <ul>
                {
                  elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
                }
            </ul>
        </>
    )
}

export default ListView;