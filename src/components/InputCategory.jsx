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
                <button type='submit'> Buscar </button>
            </form>
        </>
    )
}
