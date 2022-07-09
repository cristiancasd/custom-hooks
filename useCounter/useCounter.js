import { useState } from "react"

export const useCounter = (initialValue=10) => {
  
    const [counter, setCounter] = useState(initialValue)
  
    const increment = (valor=1) => { setCounter(counter+valor)}
    const decrement = (valor=1) => { (counter>0) && setCounter(counter-valor)}
    const reset     = ()        => { setCounter(initialValue)}
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
