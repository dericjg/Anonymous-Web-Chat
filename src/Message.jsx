import React from 'react'

export default function Message({ isSent, user, content }){

  const align = isSent ? 'items-end' : 'items-start'
  const flex = isSent ? 'self-end' : 'self-start'
  const textAlign = isSent ? 'right' : 'left'
  
  return(
    <div className={`${flex} flex flex-col gap-[2px] ${align}`}>
      <span className={`text-white text-${textAlign} grow-0 w-fit`}>{user}</span>
      <p className={`text-white max-w-[60vw] rounded-lg py-[1vh] px-[3vw] w-fit break-words ${isSent ? 'bg-primary' : 'bg-light-gray'}`}>{content}</p>
    </div>
  )
}