import React, { useState, useEffect } from 'react';
import useCounter from '../hooks/useCounter';


const FuntionComponent = (props) => {

    const { add, counter } = useCounter()
    
    return (
        <>
            <h1>{props.title}: {counter}</h1>
            <button onClick={ () => add(-1) }>--</button>
            <button onClick={ () => add(1) }>++</button>
        </>
    );
}
 
export default FuntionComponent;