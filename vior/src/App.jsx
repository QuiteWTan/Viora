import { useState } from 'react'
import Navbar from './Navbar'
import SContent from './HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-row'>
      <Navbar/>
      <SContent/>
    </div>
  )
}

export default App
