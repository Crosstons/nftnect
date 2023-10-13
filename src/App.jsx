import { React } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Upload from './components/Upload'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'


function App() {

  return (
    <div className='font-qus'>
      <Navigation />

      <Home/>
      <Upload />
      <Profile />
      <Dashboard />
    </div>
  )
}

export default App
