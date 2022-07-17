import { fireEvent, render, screen } from "@testing-library/react"
import { InputCategory } from "../../src/components/InputCategory"

describe('InputCaategory Tests ', () => { 

    test('should contain value on input', () => { 
        render( <InputCategory onAddCategory={ () => {} } />)
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value : 'Homer Simpson'} } )
        expect( input.value ).toBe('Homer Simpson')
    });

    test('should contain a submit form', () => { 
        const onAddCategory = jest.fn();    //  Funcion
        const inputValue = 'Homer Simpson'  //  Valor del input 
        render( <InputCategory onAddCategory={ onAddCategory } />)  //  Componente del formulario
        const input = screen.getByRole('textbox');  // objecto del formulario
        const form = screen.getByRole('form');      //  objeto del input
        fireEvent.input( input, { target: { value : inputValue} } ) // Simular valor del input
        fireEvent.submit( form )    //  Simular Posteo
        expect( input.value ).toBe('')  //  Reset del input Value
        expect( onAddCategory ).toHaveBeenCalled(); //  Posteo una vez
        expect( onAddCategory ).toHaveBeenCalledTimes( 1 );  //  Posteo una vez
        expect( onAddCategory ).toHaveBeenLastCalledWith( inputValue );  //  Posteo una vez
     });

     test('should not Call onAddCategory if InputValue is empty', () => { 
        const onAddCategory = jest.fn(); //  Funcion
        render( <InputCategory onAddCategory={ onAddCategory } />) // Componente del Formulario
        const form = screen.getByRole('form'); // Formulario
        fireEvent.submit( form )    //  Evento de Posteo ( sin valor del input )
        expect( onAddCategory ).toHaveBeenCalledTimes(0)    //  No se debe realizar ningun posteo porque el input is empty
     })

})

