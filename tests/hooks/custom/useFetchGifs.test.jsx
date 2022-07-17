import { useFetchGifs } from "../../../src/hooks/custom/useFetchGifs"
import { renderHook, waitFor } from '@testing-library/react'

describe('Custom Hook useFetch', () => { 
    test('should return a initialState', () => { 
        const { result } = renderHook(() => useFetchGifs('Homer Simpson'))
        const { images, isLoading } = result.current;
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
     });

     test('should return an Array of image & isLoading false', async() => { 
        const { result } = renderHook(() => useFetchGifs('Homer Simpson'))
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            () => expect( result.current.isLoading ).toBeFalsy()
        )
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        // expect( result.current.isLoading ).toBeFalsy()
      })
 })