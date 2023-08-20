import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";


export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['Demon Slayer']);

   const onAddCategory = (newCategory)=>{

      if(categories.includes(newCategory)) return;

      setCategories([newCategory,...categories])
   }

  return (
   <>
      <div className="header">
         <h1>Gif Expert App</h1>
         <AddCategory onAddCategory={onAddCategory} />
      </div>
      <div className="main">
      {
         categories.map( (category)=> (
            <GifGrid category={category} key={category}/>
         ))
      }
      </div>
   </>
  )
}
