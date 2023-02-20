import React from 'react'


const LoginHeader = () => {
  return (
    <header id='login-header'>
      <p>Welcome to</p>
      <p>Lost in Translation</p>
      {/* image not working lul */}
      <img src={`public\images\Logo-Hello.png`} alt='eh?' width='120' height='140'/>
      <p>Let's get started...</p>
    </header>
  )
}

export default LoginHeader