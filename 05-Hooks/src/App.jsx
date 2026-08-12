// const App = () => {
//   let a = 20;

//   function changeA(){
//     console.log(a);
//     a++;
//     console.log(a);
//   }
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>Click</button>
//     </div>
//   )
// }
// export default App


// import React, { useState } from 'react'
// const App = () => {
//   const [first, setfirst] = useState('second')
//   function changeObj(){
//     setfirst(56)
//     console.log('Print 56')
//   }
//   return (
//     <div>
//       <h1>Value of a is {first}</h1>
//       <button onClick={changeObj}>Click</button>
//     </div>
//   )
// }
// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)

//   function increaseNum() {
//     setNum(num + 1)
//   }

//   function decreaseNum() {
//     setNum(num - 1)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <div className="button">
//         <button onClick={decreaseNum}>Decrease</button>
//         <button onClick={increaseNum}>Increase</button>
//       </div>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App