import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('test in AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    } );
    
    test('debe mostrase correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de cambiar la cajande texto', () => {
        
        const input = wrapper.find('input');
        input.simulate( 'change', { target: { value: 'helouda' } } );

    })
    
    test('No debe postear la info con submit', () => {
        
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );
        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        input.simulate( 'change', { target: { value: 'snk' } } );

        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toBeCalledTimes(1);
        expect( setCategories ).toBeCalledWith( expect.any(Function) );

        expect( input.prop('value') ).toBe('');

    })
    

})
