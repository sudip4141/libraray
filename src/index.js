import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import Sign from './Sign';
import Librarian from './Librarian';
import {BrowserRouter,
Routes,
Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/libraray" element={<App/>}></Route>
  <Route path="/libraray/user" element={<User/>}></Route>
  <Route path="/libraray/sign" element={<Sign/>}></Route>
  <Route path="/libraray/librarian" element={<Librarian/>}></Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
