import React from "react";

import {BrowserRouter,Route, Routes} from 'react-router-dom'

import './App.css'
// import CreateTodo from "./Component/CreateTodo";

// import Status from "./Component/Status";
// import Merge from "./Component/Merge";
import Home from "./Component/Home";
import Contact from "./Component/Contact";

// import FavouriteFood from './Component/FavouriteFood'
// import Array from './Component/Array'
import Todo from "./Component/Todo";


function App() {
  return (
    
    <div className="App">
      {/* <Status/> */}
      {/* <FavouriteFood /> */}
      {/* <Array /> */}
     {/* <Merge /> */}
      <Todo />
{/*     
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

       </Routes>
      </BrowserRouter>  */}
    </div>
   
    
  )
}

export default App;