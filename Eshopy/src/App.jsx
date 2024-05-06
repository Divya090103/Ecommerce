
import './App.css'
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Products from './components/Products'
import Singleproduct from './components/Singleproduct'
import Cart from './components/Cart'
import Hme from './components/Hme'

function App() {
    const data="WEB STORE"
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route index element={<Hme title={data}/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={< Products/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Route>
      <Route path='/singleproduct/:id' element={<Singleproduct/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*'element={<Error/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
