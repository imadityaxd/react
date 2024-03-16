import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' elements={<Home />}/>
      <Route path='/books/create' elements={<CreateBook />}/>
      <Route path='/books/details/:id' elements={<ShowBook />}/>
      <Route path='/books/edit/:id' elements={<EditBook />}/>
      <Route path='/books/delete/:id '  elements={<DeleteBook />}/>
    </Routes>
  )
};

export default App