import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Test in GifExpertApp', () => {
    
    test('muestra GifExpertApp correctamente', () => {
        
        const wrapper = shallow( <GifExpertApp /> )
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('debe mostrar una lista de categorias', () => {
        
        const categories = [ 'snk', 'one piece' ];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );

    })
    

})
