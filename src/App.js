
import { useState } from 'react';
import './App.css';
const button = [9,8,7,6,5,4,3,2,1,0,'.']
const functionButton = ['*','/','+','-']
function App() {
  const [valueToCalculate,setValueToCalculate] = useState(""); 
  function handleClick(e){
    const name = e.target.name ; 
    if(name === 'equal'){
      const value = eval(valueToCalculate);
      setValueToCalculate(value);
    }else if(name === 'clear'){
      setValueToCalculate("");
    }else{
      setValueToCalculate((prev)=>{return prev+e.target.value})
    }
  }
 
  return (
    <div className="App">
     <h1>CALCULATOR APP</h1>
     <div className='container'>
        <div className='calculatorscreen'>
          <input value={valueToCalculate} className='screen'/>
        </div>
        <div className='allButton'>
          {functionButton.map((fB)=>{
            return(
              <button className='fb' name='function' value={fB} onClick={(e)=>handleClick(e)}>{fB}</button>
            )
          })}

          {button.map((btnvalue,index)=>{
              
              return(
                <button className='btn' name='number' value={btnvalue} onClick={(e)=>handleClick(e)}>{btnvalue}</button>
              )
              
          })}
          <button name='equal' className='equalButton' onClick={(e)=>handleClick(e)}>=</button>
          <button name='clear' className='clearButton' onClick={(e)=>handleClick(e)} >c</button>
        </div>
     </div>
    </div>
  );
}

export default App;
