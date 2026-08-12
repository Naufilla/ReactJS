// import React from 'react'

// const App = () => {

  // function inputChanging() {
  //   console.log('User is typing');

  // }


  // return (
    // <div>
    //   hello guys
    //   <button onClick={() => {
    //     console.log('Button Clicked');
    //   }}>Click Me</button>
    // </div>

    // <div>
    //   <input onChange={inputChanging} type="text" placeholder='Enter your name' />
    // </div>

    // <div>
    //   <input onChange={function(elem){
    //     console.log(elem);
    //   }} 
    //   type="text" placeholder='Enter Name' />
    // </div>


    // <div>
    //   <input onChange={function (elem) {
    //     console.log(elem.target.value);
    //   }}
    //     type="text" placeholder='Enter Name' />
    // </div>


    // <div onMouseMove={(elem) => {
    //   console.log(elem.clientX);
    // }} 
    // className="box">
    // </div>

    // <div onMouseMove={(elem) => {
    //   console.log(elem.clientY);
    // }}
    //   className="box">
    // </div>


//   )
// }

// export default App

// import React from 'react'
// const App = () => {
//   const pageScrolling = (elem) => {
//     if (elem > 0) {
//       console.log('forward scrolling');
//     } else {
//       console.log('backward scrolling');
//     }
//   }
//   return (
//     <div onWheel={(elem) => {
//       pageScrolling(elem.deltaY)
//     }
//     }>
//       <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div>
//     </div >
//   )
// }
// export default App


import React from 'react'

const App = () => {

  function btnClicked() {
    console.log('hello');
  }
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default App