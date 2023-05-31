import React, { useState, useEffect } from 'react';


const useCounter = () => {
    const [counter, setCounter] = useState(0)

    const add = (value) => {
        setCounter(counter + value)
    }

    // useEffect(() => {
    //     console.log('renderizando componente basado en función')
    // }, [counter]);

    // useEffect(() => {
    //     console.log('renderizando componente basado en función 2')
    // }, []);

    useEffect(() => {    
      return () => {
        console.log('El componente basado en función ha sido desmontado')
      }
    }, [])

    return { counter, setCounter, add }
}
 
export default useCounter;