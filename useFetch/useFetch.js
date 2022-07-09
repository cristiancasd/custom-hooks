import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ //Inicializo
        data      : null,
        isLoading : true,
        hasError  : true
    })

    const getFetch=async() =>{
        setState({
            ...state,
            isLoading:true //Mientras hago la petición
        })      
        const resp = await fetch(url)
        const data = await resp.json()
        setState({
            data,
            isLoading: false,
            hasError : false
        })
    }    
    useEffect(() => {
        getFetch()
    }, [url])
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };    
}
