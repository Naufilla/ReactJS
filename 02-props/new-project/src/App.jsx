import React from 'react'
import Card from './components/Card'
// import card from ''

const App = () => {
  return (
    <div className="parent">
      <Card user='Taiba' age={17} img="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Tabrez' age={15} img="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Mufasa' age={4} img="https://images.unsplash.com/photo-1642112312487-d512daf66d93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Naufilla' age={21} img="https://images.unsplash.com/photo-1552944150-6dd1180e5999?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>

  )
}

export default App
