import React, { useState } from 'react'
import Message from './Message'
import MessageContainer from './MessageContainer'
import Nav from './Nav'
import InputBox from './InputBox'
import Login from './Login'
import io from 'socket.io-client'


const socket = io()

export default function App() {
  const [messages, setMessages] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.user !== undefined)
  const [username, setUsername] = useState(sessionStorage.user)

//send the message to server
  function sendMessage(message) {
    if (message) {
      fetch('/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ message: message })}).then((response) => {
        if (response.status == 200) {
          response.json().then((res) => {
            if (res.status === 'accepted') {
              console.log('send accepted, response received: ' + res)
              socket.emit('new_message', { user: username, message: message })
              return true
            }
          }).catch((err)=>console.log('error converting to json: ', err))
        }
      }).catch((err)=>console.log('error fetching: ', err))

    }
    return false
  }

  //set the user as logged in
  function loginUser(user) {
    if (user !== '' && user.length > 1) {
      setUsername(user)
      window.sessionStorage.setItem("user", user)
      setIsLoggedIn(true)
    }
  }

  socket.on('new_message', (messageObject) => {
    setMessages([...messages, messageObject])
  })

  if (isLoggedIn) {
    return (
      <>
        <Nav />
        <MessageContainer>
          {messages.map((messageObject) => <Message isSent={messageObject.user === username ? true : false} user={messageObject.user} content={messageObject.message} />)}
        </MessageContainer>
        <InputBox onSubmit={sendMessage} />
      </>
    )
  }
  else {
    return (
      <Login onSubmit={loginUser} />
    )
  }

}