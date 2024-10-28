import React, { useEffect, useState } from 'react'
import Chat from './components/chat/Chat'
import List from './components/list/List'
import Detail from './components/detail/Detail'
import Notification from '/src/components/notification/Notification'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './lib/firebaseConfig'
import useUserStore from './lib/userStore'
import Loader from './components/loader/Loader'

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user.uid)
      fetchUserInfo(user.uid)
    })

    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  console.log(currentUser)

  const [formAction, setFormAction] = useState(true)


  if (isLoading) return <div className="container"><Loader /></div>

  return (
    <div className="container">
      {
        currentUser ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) :
          (
            formAction ? (
              <Login setFormAction={setFormAction} />
            ) : (
                <SignUp setFormAction={setFormAction} />
              )
        )
      }
      <Notification />
    </div>
  )
}

export default App