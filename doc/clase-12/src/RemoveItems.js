import { useState} from 'react';
import arrImagenes from 'data';

function App()
{
    let [list]=useState(arrImagenes);
    return (
        <div>
            <h2>Test</h2>
            <h3>Test 2</h3>
            <hr />
            
            {list.map(imagen => {
                return (
                    <div>
                        {imagen.name}
                    </div>
                )
            }
            )}
        </div>
    )
}



export default App