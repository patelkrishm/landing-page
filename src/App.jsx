import { useState } from 'react'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Main_Page from './Components/Main_Page'
import Login from './Components/Login'
import Sign from './Components/Sign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main_Page/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Sign/>}/>
      </Routes>
    </>
  )
}

export default App
