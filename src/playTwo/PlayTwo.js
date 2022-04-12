import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount, crementByAmount } from './counter';

function PlayTwo() {
    
        const {value} = useSelector((state) => state.counter);
        const dispatch = useDispatch()
    return (
        <div>
            <div className='container'>
            <h3>Текущее число: {value} </h3>
            </div>
            <div className='container'>
            <button className='btn' onClick={() => dispatch(increment())}>Прибавить 1 к числу</button>
            </div>
            <br />
            <div className='container'>
            <button className='btn' onClick={() => dispatch(decrement())}>Вычесть 1 от числа</button>
            </div>
            <br />
            <div className='container'>
            <button className='btn' onClick={() => dispatch(incrementByAmount(5))}>Прибавить 5 к числу</button>
            </div>
            <br />
            <div className='container'>
            <button className='btn' onClick={() => dispatch(decrementByAmount(2))}>Умножить число на 2</button>
            </div>
            <br />
            <div className='container'>
            <button className='btn' onClick={() => dispatch(crementByAmount(2))}>Разделить число на 2</button>
            </div>
            <br />
            <div className = 'back'>
            <div className='container'>
                <h2>Задания:</h2>
            </div>
            <div className='container'>
                <h4>1. Получи число 30.</h4>
            </div>
            <div className='container'>
                <h4>2. Получи число 55.</h4>
            </div>
            <div className='container'>
                <h4>3. Получи число 100, обязательно использовав умножение.</h4>
            </div>
            <div className='container'>
                <h4>4. Получи число 2.5. Используй деление.</h4>
            </div>
            <div className='container'>
                <h4>4. Получи число -10.</h4>
            </div>
            </div>
        </div>
        
    )
}

export default PlayTwo;
