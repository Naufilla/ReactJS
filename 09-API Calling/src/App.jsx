// Example 1

// import React from 'react'
// const App = () => {
//   async function getData() {
//     const response = await fetch('https://meowfacts.herokuapp.com/')
//     console.log(response)
//   }
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }
// export default App


// Example 2

// import React from 'react'
// const App = () => {

//   const getData = async () => {
//     const response = await fetch('https://meowfacts.herokuapp.com/')

//     const data = await response.json()

//     console.log(data)
//   }
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }
// export default App


// Example 3

import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])



  const getData = async () => {
    const response = await axios.get('https://meowfacts.herokuapp.com/')

    setData(response.data.data[0])
    console.log(response.data.data[0]);
  }
  console.log("data", data);

  return (
    <div className="container">
      <div className="card">
        <h1>🐱 Meow Facts</h1>

        <button onClick={getData}>Get Data</button>

        <div className="fact-box">
          <h3>Random Cat Fact</h3>
          <p>{data || "Click the button to get a cat fact!"}</p>
        </div>
      </div>
    </div>
  )
}

export default App

