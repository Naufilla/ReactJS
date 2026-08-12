import React from 'react'

const App = () => {

  localStorage.setItem('user', 'ABC')
  localStorage.clear()
  localStorage.getItem('user')

  const dataa = {
    username : 'Sarthak',
    age : 13,
    city : 'Mumbai'
  }

  localStorage.setItem('dataa', JSON.stringify(dataa))
  console.log(dataa)

  return (
    <div>App</div>
  )
}

export default App