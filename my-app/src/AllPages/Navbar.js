import { NavLink } from "react-router-dom"

const Navbar=()=>{
    return<>
    <nav className="primary-nav">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>
        <NavLink to='login'>Login</NavLink>
        <NavLink to='products'>Product</NavLink>
        <NavLink to='data'>Data</NavLink>
        <NavLink to='logout'>Logout</NavLink>
        {/* <NavLink to='feature'>Feature</NavLink>
        <NavLink to='new'>New</NavLink> */}
    </nav>
    </>
}
export default Navbar;