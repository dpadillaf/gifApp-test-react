import { useState } from "react/cjs/react.development";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import React from 'react';


const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                       <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ) )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;