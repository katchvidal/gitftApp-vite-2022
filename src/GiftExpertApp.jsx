import React, { useState } from 'react'
import { GiftGrid, InputCategory } from './components'

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([])
    const onAddCategory = ( inputValue ) => {
        if ( categories.includes( inputValue ) ) return;
        setCategories([inputValue,...categories ])
    }
  return (
    <>
    <h2> Aplicacion Gifts React + Vite </h2>
    <InputCategory onAddCategory={ onAddCategory } />
        {
            categories.map(( cat ) => (
                <GiftGrid key={ cat } category={ cat } />
            ))
        }
    </>
  )
}

