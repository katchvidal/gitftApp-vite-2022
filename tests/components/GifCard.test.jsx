import { render } from "@testing-library/react"
import { GifCard } from "../../src/components/GifCard"
import { screen } from '@testing-library/react'

describe('Pruebas en Gif Card', () => { 
    const title = 'Pug'
    const url = 'https://google.com/pug.jpg'
    test('Debe hacer Match vs SnapShot', () => { 
        const { container } = render( <GifCard title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();
     });
     test('Debe mostrar imagen con la url y texto alternativo', () => { 
        render( <GifCard title={ title } url={ url } />)
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
      });

      test('should title as string', () => { 
        render(<GifCard title={ title } url={ url } />);
        // screen.debug();
        expect ( screen.getByText ( title )).toBeTruthy();
       })
})

// Con la u actualizamos el snapshot