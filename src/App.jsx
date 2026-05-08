import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import BookList from './components/BookList/index'
import BookDetails from './components/BookDetails'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import NotFound from './components/NotFound'

const App=() =>{
  return(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/books" element={<BookList/>}></Route>
    <Route path="/books/:id" element={<BookDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<CheckOut/>}></Route>
    <Route path="/notfound" element={<NotFound/>}></Route>
    <Route path="*" element={<Navigate to="/notfound"/>}></Route>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
