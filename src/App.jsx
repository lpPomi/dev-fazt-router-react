
import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import UserPage from './components/UserPage'
import Navbar from "./components/Navbar";
import NotFoundPage from './components/NotFoundPage'
import Dashboard from "./Dashboard";

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
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="goabout" element={<Navigate to="/about" />} />
        {/* Route not found 404. Always put it on the end of all router */}
        <Route path="*" element={<NotFoundPage />} />


      </Routes>
    </div>

  );

}

export default App