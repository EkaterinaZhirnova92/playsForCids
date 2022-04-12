import dataPlay from "./dataPlay";
import { useState } from "react";

function PlayThree() {
const [rowImage, setRowImage] = useState(dataPlay);




    return (
        <div>
            <div className='container'>
            <h2>выбери лишнее изображение</h2>
            </div>
        {rowImage.map((item) => {
            const {id, imageOne, imageTwo, imageThree, imageFour} = item;
            return(
                <div className='container cont'  key ={id}>
                    <img src = {imageOne} height = '200px' alt='imageOne' />
                    <img  src = {imageTwo} height = '200px' alt='imageTwo' />
                    <img  src = {imageThree} height = '200px' alt='imageThree' />
                    <img  src = {imageFour}  height = '200px' alt='imageFour' />
                <br />
                </div>
            )
        })}
    </div>
    )
}

export default PlayThree;
