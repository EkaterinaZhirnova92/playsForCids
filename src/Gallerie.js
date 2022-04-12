import { useState } from 'react';
import data from './data';

function Gallerie() {

    const [picture, setPicture] = useState(0);
    const{id, names, image} = data[picture];


    const backButton = () => {
        setPicture((picture) => {
            picture--;
            if(picture<0) {
                return data.length - 1;
            }
        })
    }

    const nextButton = () => {
        setPicture((picture)=> {
            picture++;
            if(picture> data.length-1) {
                picture = 0;
            }
            return picture
        })
    }

    return (
    <div>
<div className='container'>
<h2>{id} - {names}</h2>
</div>
<div className='container'>
    <button onClick={backButton}>назад</button>
    <img src={image} height='300px' alt='thing' />
    <button onClick={nextButton}>вперед</button>
</div>

    </div>
    )
}

export default Gallerie;