import React from 'react'
import { Routes, Route } from "react-router-dom";
import Error from './componentss/Error';
import Header from './componentss/Header';
import View from './componentss/Multistep_Form/View';
import FormPage from './componentss/Multistep_Form/FormPage';

import DisplayData from './componentss/Searchbar_Table/DisplayData';
import SignIn from "./componentss/SignIn_SignUp/SignIn"
import SignUp from "./componentss/SignIn_SignUp/SignUp"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} >
          <Route path=":email" element={<Header/>}/>
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/form/:email" element={<FormPage />} />
        <Route path="/display/:email" element={<DisplayData />} />
        <Route path="/view/:ppdId" element={<View />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>


  )
}

export default App;