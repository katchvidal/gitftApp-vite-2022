import { render, screen, fireEvent } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('EntryAppPoint', () => {
    const onAddCategory = jest.fn();    //  Funcion
    const inputValue = 'Homer Simpson'  //  Valor del input 
    const title = 'Aplicacion Gifts React + Vite'

    test('should Contain an Input & Form', () => {
        render(<GiftExpertApp />)
        const input = screen.getByRole('textbox');  // objecto del formulario
        const form = screen.getByRole('form');      //  objeto del input
        expect(input.value).toBe('')  //  Reset del input Value
        fireEvent.submit(form)    //  Evento de Posteo ( sin valor del input )
        fireEvent.input(input, { target: { value: inputValue } }) // Simular valor del input
        fireEvent.submit(form)    //  Simular Posteo
        expect(onAddCategory).toHaveBeenCalledTimes(0)    //  No se debe realizar ningun posteo porque el input is empty
    });

    test('should contain a Title', () => {
        render(<GiftExpertApp />)
        expect(screen.getByText(title)).toBeTruthy();
    });

})

