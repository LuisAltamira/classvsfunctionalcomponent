import ClassCounter from "./components/ClassCounter"
import FuntionComponent from "./components/FuntionComponent"
import React, { useState } from 'react';


const App = () => {
    const [montar, setMontar] = useState(true);
    const [montar2, setMontar2] = useState(true);

    return (

        <div>
            {
                montar
                ? <ClassCounter title="Componente basado en clase" />
                : null
            }
            <button onClick={() => setMontar(!montar)}>Click</button>
            
            {
                montar2
                ? <FuntionComponent title="componente basado en función" />
                : null
            }
            
            <button onClick={() => setMontar2(!montar2)}>Click</button>
            
        </div>
    )
}
 
export default App