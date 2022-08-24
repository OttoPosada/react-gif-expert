import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [cactegories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory) => {
        //cactegories.push(newCategory);
        if(cactegories.includes(newCategory)) return;
        setCategories([ newCategory, ...cactegories]);
        //setCategories([ 'Naruto', ...cactegories]);
        //setCategories ( cat => [...cat, 'Inu']);
    };
    
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
            /*setCategories = {setCategories}*/
            onNewCategory={event => onAddCategory(event) } />


                { 
                    cactegories.map(( category) => (
                    <GifGrid 
                    key={ category }
                    category = { category } />
                ))
                }
                {/* gif Item */}
        </>
    )
}