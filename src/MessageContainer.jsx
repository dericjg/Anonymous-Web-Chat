import React, { useRef, useEffect} from 'react'

export default function MessageContainer({ children }){

  const endRef = useRef(null)
  const scrollToEnd = ()=>{
    endRef.current?.scrollIntoView()
  }
  useEffect(()=>{
    scrollToEnd()
  }, [children])
  
  return(
    <div className="flex flex-col bg-bg justify-start h-[75vh] mt-[2vh] w-[100%] pt-[2vh] px-[3vw] gap-[2vh] overflow-y-scroll ">
      {children}
      <div ref={endRef}></div>
    </div>
  )
}