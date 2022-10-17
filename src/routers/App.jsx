import { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from '../components/menu/Menu';

import '../styles/App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route exact path={''} element = {''}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
