
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {
  const[amount,setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  function handleIncrementClick(){
    dispatch(increment());

  }
  function handleDecrementClick(){

    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset());
  }

  function handleIncAmount(){
       dispatch(incrementByAmount(amount));
  }

  return (
    <>
       <div className ="container">
        <button onClick={handleIncrementClick}> + </button> 


        <p>count :{count}</p>

        <button onClick={handleDecrementClick}> - </button>  
        <br></br>  
        <button onClick={handleReset}> Reset </button>  
        <br />
        <input type ='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='enter number'></input> 
        <br />
        <button onClick={handleIncAmount}> Inc By Number</button>
        
           
        </div>
    </>
  )
}

export default App
