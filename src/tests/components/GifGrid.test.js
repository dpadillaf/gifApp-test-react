import React from 'react';
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock( '../../hooks/useFetchGifs' );


describe('test in GifGrid', () => {
    
    test('debe mostrarse correctamenyte', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        let wrapper = shallow( <GifGrid category={ 'snk' } /> );
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [ {
            id: 'abc',
            title: 'un title',
            url: 'https://google.com'
        },
        {
            id: 'cba',
            title: 'un title 2',
            url: 'https://google.com'
        } ];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        let wrapper = shallow( <GifGrid category={ 'snk' } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );

    })
    

})
