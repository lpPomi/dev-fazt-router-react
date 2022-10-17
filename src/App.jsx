
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NotFoundPage from './components/NotFoundPage'

function App() {


  return (

    <div>
      {/*     <h1>Welcome to React Router!</h1> */}
      {/*    <Routes>
        <Route path='/' element={
          <div>in the route /</div>
        } />

        <Route path='/about' element={
          <div>in the route /about</div>
        } />
      </Routes> */}

      {/* hier is the navbar with navegation */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        {/* Route not found 404 */}
        <Route path="*" element={<NotFoundPage />} />


      </Routes>
    </div>

  );

}

export default App