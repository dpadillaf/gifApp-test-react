import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('test in GifGridItem', () => {

    const obj = {
        title: 'snk', 
        url: `https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg`
    }

    const wrapper = shallow( 
        <GifGridItem 
            { ...obj  } 
            key={ '12345' } 
        /> );
    
    test('debe mostrar correctamente el componente', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe tener un parrafo con title ', () => {
        
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( obj.title );

    })
    
    test('debe tener la imagen igual url, alt', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(obj.url);
        expect( img.prop('alt') ).toBe(obj.title);

    })
    
    test('div debe tener clase  animate__backInDown', () => {
        
        const div = wrapper.find('div');
        expect( div.hasClass('animate__backInDown') ).toBe(true);

    })
    

})
