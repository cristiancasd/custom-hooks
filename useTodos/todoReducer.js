
//Se encarga de cambiar el estado
export const todoReducer = (initialState=[],action) => {
    
    switch (action.type) {
        case '[TODO] Add Todo' :
            return [...initialState, action.payload]
        
        case '[TODO] Remove Todo':
            //Nuevo arreglo con todos los datos menos el del id definido
            return initialState.filter(todo => todo.id !== action.payload)
            
        case '[TODO] Toggle Todo':
            //map crea un nuevo arreglo, en el recorrido solo cambio el done del id recibido
            return initialState.map(todo=>{
                
                if(todo.id===action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

        default:
            return initialState
    }
}
