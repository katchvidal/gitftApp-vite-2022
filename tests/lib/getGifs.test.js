import { getGifs } from '../../src/lib/getGifs'

describe('Pruebas en getGifs()', () => { 
    test('Debe retornar un arreglo de gifs ', async() => { 
        const gifs = await getGifs(2, 'Homer Simpson');
        expect( gifs.length ).toBeGreaterThan( 0 ); //  La peticion debe contener algo
        //  La peticion debe regresar  un objecto igual al siguiente 
        expect ( gifs[0] ).toEqual({
            id : expect.any(String) ,
            title: expect.any(String),
            url: expect.any(String)
        })
     })
 })