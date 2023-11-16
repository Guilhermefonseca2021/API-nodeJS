import './App.css'
import  Homepage from './pages/Homepage/index';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
