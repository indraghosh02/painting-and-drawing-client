import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";


const Navbar = () => {

 const {  logout, user } = UseAuth()
    const navLinks = <>
    <li> <NavLink to="/"  className={({ isActive }) =>
            `py-2 px-4 font-bold ${isActive ? "bg-orange-600 text-white" : "bg-transparent"}`
          }
        >Home</NavLink></li>
    <li> <NavLink to="/allartcraft" className={({ isActive }) =>
            `py-2 px-4 font-bold ${isActive ? "bg-orange-600 text-white" : "bg-transparent"}`
          }>All Art & craft Items</NavLink></li>

    <li> <NavLink to="/addcraft" className={({ isActive }) =>
            `py-2 px-4 font-bold ${isActive ? "bg-orange-600 text-white" : "bg-transparent"}`
          }>Add Craft Item</NavLink></li>
    <li> <NavLink to="/myartcraft" className={({ isActive }) =>
            `py-2 px-4 font-bold ${isActive ? "bg-orange-600 text-white" : "bg-transparent"}`
          }> My Art & Craft List</NavLink></li>

   

  
</>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-extrabold text-orange-500 ">Art Sketcher</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    
  {
            user ? (
              <div className='flex justify-center items-center'>
               
        
               <div className="tooltip tooltip-bottom" data-tip={user?.displayName || 'user name not found'}>
                  <div className="w-10 h-10 rounded-full " >
                    <img className="rounded-full" alt="photo" src={user?.photoURL || "https://i.ibb.co/yQd38JP/icons8-user-50.png"}
 />
                 </div>
                </div>
                <button className='btn btn-sm bg-orange-600 text-white border-0 ml-4 mr-4' onClick={logout}>Logout</button>
              </div>
            )
    :
        (<div>
          <Link to="/login"><a className="btn bg-orange-600 text-white mr-4">Log in</a></Link>
    <Link to="/register"><a className="btn bg-orange-600 text-white">Register</a></Link>
        </div>)
        }






  </div>
</div>
    );
};

export default Navbar;