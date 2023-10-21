import React from 'react'
import Header from '../components/Header'
import SignUp from '../components/SignUp'

function SignupPage() {
  return (
    <div>
      <Header
        heading="Create a new account"
        paragraph="Already have an account "
        linkName="Login"
        linkUrl="/"
      />
      <SignUp />
    </div>
  )
}

export default SignupPage

