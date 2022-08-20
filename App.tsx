import * as React from 'react';
import './style.css';
import {useState} from 'react';

export default function App() {
  const[colorr,setcolor]=useState('green');
  let handlecolor=()=>{
    setcolor(colorr==='green'?'red':'green')
  }
  return (
    <div className='text'>
      <h1 style={{color:colorr}}>Hello StackBlitz!</h1>
      <button onClick={handlecolor}>Change color</button>
    </div>
  );
}






// const[colorr,setcolor]=useState('green');
//   let handlecolor=()=>{
//     setcolor('red')
//   }
//   return (
//     <div>
//       <h1 style={{color:colorr}}>Hello StackBlitz!</h1>
//       <button onClick={handlecolor}>Change color</button>
//     </div>
//   );
