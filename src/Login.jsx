import React, { useState } from 'react'

export default function Login({ onSubmit }){
  const [input, setInput] = useState('')
  
  return(
    <div className="w-screen h-screen bg-bg text-white flex flex-col items-center justify-center gap-[2vh]">
      <h3>Choose your username:</h3>
      <input className="bg-primary w-[60vw] text-white rounded-lg py-[1vh] px-[2vw]" type='text' placeholder='Enter a username...' onChange={(e)=>setInput(e.target.value)} />
      <button className="bg-primary text-white w-[25vw] rounded-lg py-[1vh] px-[2vw]" onClick={()=>onSubmit(input)}>Submit</button>
    </div>
  )
}