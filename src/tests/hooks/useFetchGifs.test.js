import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('test in useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'snk' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );

    })
    
    test('debe retirnar un arreglo de imgs y el loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'snk' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    })
    

})
