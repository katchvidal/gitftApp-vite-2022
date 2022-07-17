import { GiftGrid } from "../../src/components/GiftGrid"
import { render, screen } from '@testing-library/react'
import { useFetchGifs } from "../../src/hooks/custom/useFetchGifs"

jest.mock('../../src/hooks/custom/useFetchGifs')

describe('Test GigGrid', () => { 
    const category = 'Homer Simpson'

    
    test('should Contain Loading Initial', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GiftGrid category={ category } /> )
        expect( screen.getByText( 'Cargando...'));

     })

     test('should Show an images & isLoading using useFetchGifs', () => {
        const gifs = [
            { id: 'ABC', title : 'Homer Simpson', url: 'https://image01.com.url'},
            { id: 'DEF', title : 'Bart Simpson', url: 'https://image02.com.url'},
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GiftGrid category={ category } /> )
        // expect( screen.getByText( category ))
        screen.debug();
        expect( screen.getAllByRole('img').length).toBe( 2 )
     })
})