import React, { useRef, useState } from 'react'

export default function InputBox({onSubmit}){
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  return(
    <div className="bg-bg text-white h-[9vh] w-[100%] flex justify-center items-center gap-[2vw]">
      <input ref={inputRef} className="w-[75%] h-[6vh] bg-light-gray text-white px-[2vw] focus:border-none" type="text" placeholder="Send a message..." value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button className="w-[15%] h-[6vh] bg-primary rounded-md hover:bg-white hover:text-primary" onClick={()=>{
       onSubmit(input)
       setInput('')
    }}>Send</button>
    </div>
  )
}