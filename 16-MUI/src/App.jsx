// import React from 'react'
// import Button from '@mui/material/Button'

// const App = () => {
//   return (
//     <div>
//       <Button>
//         Click Me
//       </Button>
//     </div>
//   )
// }

// export default App


// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import Box from '@mui/material/Box'
// const App = () => {
//   return (  
//     <Box
//       sx={{
//         width: 300,
//         margin: '100px auto'
//       }}
//     >

//       <TextField
//         label="Email"
//         variant="outlined"
//         fullWidth
//       />
//       <br /><br />
//       <TextField
//         label="Password"
//         type="password"
//         variant="outlined"
//         fullWidth
//       />
//       <br /><br />
//       <Button
//         variant="contained"
//         fullWidth
//       >
//         Login
//       </Button>
//     </Box>
//   )
// }
// export default App

// import React from 'react'
// import { Typography } from '@mui/material'

// const App = () => {
//   return (
//     <div>
//       <Typography variant="h1">
//         Hello
//       </Typography>
//     </div>
//   )
// }

// export default App

import { Routes, Route } from 'react-router-dom'
import {
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { Box } from '@mui/material'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'


const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          backgroundColor: '#80b9ba',
          color: 'black',
          minHeight: '100vh',
          // Width: '100vw',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App