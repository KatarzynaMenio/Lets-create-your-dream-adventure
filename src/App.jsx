import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss'
import Layout from "./view/Layout.jsx";
import Home from "./view/Home.jsx";
import About from "./view/About.jsx";
import Inspiration from "./view/Inspiration.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/inspiration" element={<Inspiration />} >
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>

  )
}

export default App
