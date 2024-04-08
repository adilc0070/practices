import React, { useRef, useState }  from 'react'

function App() {
  let timerid=useRef()
  let start=()=>{
    console.log('hell');
    timerid.current=setInterval(()=>{
      setCounter(counter+=1)
    },1000)
  }
  let stop=()=>{
    clearInterval(timerid.current)
  }

  let [counter,setCounter]=useState(0)
  return (
    <div>
      <h2>counter:{ counter}</h2>
      <button onClick={()=>start()}>start</button>
      <button onClick={()=>stop()}>stop</button>
    </div>
  )
}

export default App
