import React from 'react'
import Header from '../components/Header'
import Login from '../components/login'

function LoginPage() {
  return (
    <div>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  )
}

export default LoginPage
