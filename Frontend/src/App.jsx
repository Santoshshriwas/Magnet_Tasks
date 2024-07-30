// import React from 'react'
// import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Layout from './Components/Layout/Layout.jsx'
// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//        <Routes>
//         <Route path="/" element={<Layout/>}></Route>

//        </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App

import React from 'react'
import Layout from './Components/Layout/Layout.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
  <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
        
      </Route>
     </Routes>
    </BrowserRouter>
  </>
  )
}

export default App