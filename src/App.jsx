import { React } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Upload from './components/Upload'
import Profile from './components/Profile'


function App() {

  return (
    <div className='font-qus'>
      <Navigation />

      <Home/>
      <Upload />
      <Profile />
    </div>
  )
}

export default App
