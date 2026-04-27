import React from 'react'

const App = () => {

  const formSubmitted = () => {
    alert('Form Submitted')
  }

  return (

    <div className="container">
      <form action="">
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>

        <button type="submit">Submit</button>
        <div onClick={formSubmitted}></div>
      </form>

    </div>
  )
}

export default App
