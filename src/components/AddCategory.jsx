import { useState } from "react";


export const AddCategory = ({onAddCategory}) => {

   const [inputValue, setInputValue] = useState('')

   const onInputChange = ({target})=>{
      setInputValue(target.value);
   }

   const onFormSubmit = (e)=>{
      e.preventDefault();
      if (inputValue.trim().length <= 1) return;
      onAddCategory(inputValue);
      setInputValue('');
   }

  return (
    <form onSubmit={ onFormSubmit }>
      <input 
         type="text" 
         onChange={onInputChange}
         placeholder="Buscar Gifs"
         value={inputValue}
      />
      <button
         onClick={onFormSubmit}
         type="submit"
      >
         Agregar
      </button>
    </form>
  )
}
