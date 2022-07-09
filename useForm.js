import { useState } from "react";

export const useForm = (initialForm={}) => {
  
    const [formState, setFormState] = useState(initialForm);
        
      const onInputChange=({target})=>{
        setFormState({
          ...formState,
          [target.name]:target.value
        })
      };

      //Reset
      const onResetForm=()=>{
        setFormState(initialForm)
      };
    
    return ({
        ...formState,
        onInputChange,
        onResetForm
    })
}
