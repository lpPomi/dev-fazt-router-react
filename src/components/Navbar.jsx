import { NavLink } from "react-router-dom";
//import './card.css'

/* 
var btnStyle = {
    background: 'red',
    color: 'white',
    padding: '10px'
} */

function Navbar() {
    var data = []
    return (

        <>
            <main>
                <div className="navTitleCard">
                    <h3 >Navbar</h3>
                </div>
            </main>

            <NavLink className={({ isActive }) => isActive ? 'active' : 'blue'} to="/" end>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'blue'} to="/about">About</NavLink>

            {/*  good! use end in the root component
            <NavLink className='navStyle' to="/" end>Home</NavLink>
            <NavLink className='navStyle' to="/about">About</NavLink>
            */}

            {/* not so good but it works when var btnStyle is defined as object 
             <NavLink style={btnStyle} to="/">Home</NavLink>
            <NavLink style={btnStyle} to="/about">About</NavLink>
            */}

            {/* <ul>
                <li>
                    <NavLink className={(data) => console.log(data, 'in root')} to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink className={(data) => console.log(data, 'in about')} to="/about">About</NavLink>
                </li>
               </ul>
            */}

        </>
    )
}

export default Navbar