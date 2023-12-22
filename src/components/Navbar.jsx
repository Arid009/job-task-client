
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""}>Home</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Task Manager</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {user ? <div className="flex items-center">
                    <img src={user.photoURL} className="w-8 h-8 mr-4 rounded-lg" alt="" />
                    <button onClick={handleLogOut} className="btn bg-orange-400 hover:bg-orange-500">Log Out</button>
                </div>
                    :
                    <Link to='/login' className="btn bg-orange-400 hover:bg-orange-500">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;