import React from 'react'
import Chat from './components/chat/Chat'
import List from './components/list/List'
import Detail from './components/detail/Detail'
import Notification from '/src/components/notification/Notification'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'

const App = () => {
  const user = true;

  return (
    <div className="container">
      {
        user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
          // <SignUp />
        )
      }
      <Notification />
    </div>
  )
}

export default App