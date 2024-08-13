import React from 'react'
import { useCounter} from "../hooks/useCounter"

export const CounterApp = () => {

    const { counter, increment, reset, decrement } = useCounter(0)

  return (
   <>

        <div className='container'>
                <h1> Contador </h1>
                <h4> {counter} </h4>

       <button  className="btn btn-success  clase " onClick={ () => increment() }>+1</button>
        <button  className="btn btn-warning clase"onClick={ () => reset() } >Reset</button>
        <button  className="btn btn-danger clase " onClick={ () => decrement(1, true) }>-1</button>
        </div>
    

   </>
  )
}
