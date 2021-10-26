import { getGifs } from "../../helpers/getGifs"

describe('tesnt in getGifs', () => {
    
    test('debe de traer 10 elementos', async () => {
        
        const gifs = await getGifs('snk');
        expect( gifs.length ).toBe(10);

    })
    

})
