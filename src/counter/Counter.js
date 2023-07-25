import { useState } from 'react';
import './Counter.css'
var count = 0;

const Counter = () => {
    const [count, setCount] = useState(0);
    const Addition = () => {
        setCount(count + 1)
    }
    const Decrease = () => {

        setCount(count - 1)
    }
    const Reset = () => {
        setCount(0)
    }




    return (
    <div>   <div className='container'>
            <button type="button" onClick={Addition} className="btn btn-primary">Increament</button>
             <p style={{padding : '10px 28px',fontSize:'25px'}} >{count}</p>
              <button type="button" onClick={Decrease} className="btn btn-danger">Decreament</button>
              </div>

            <div className='container'> <button type="button" onClick={Reset} className="btn btn-outline-success">Reset</button>
            </div>
            </div> 
        
    );
}

export default Counter;
