import React, { useState } from 'react'

export const InputCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        if ( inputValue.trim().length <= 1 ) return;
        onAddCategory( inputValue )
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    placeholder='Introduce Categoria / Personaje / Serie a Buscar'
                />
              <button type="submit" className="mt-2 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
            </form>
        </>
    )
}
