import { NavLink } from "react-router-dom";
import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);    

 return (
   <>

      <nav className="px-4 py-6  flex justify-between items-center mx-auto max-w-7xl ">

          <h1 className="font-bold text-xl text-yellow-600 lg:text-2xl ">FASTNEWS</h1>

          {/* start menus */}

          <div className='hidden lg:flex lg:space-x-5'>
            <NavLink to="/" exact className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">General</NavLink>
            <NavLink to="/business" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">Business</NavLink>
            <NavLink to="/entertainment" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">Entertainment</NavLink>
            <NavLink to="/science" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">Science</NavLink>
            <NavLink to="/technology" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">Technology</NavLink>
          </div>
          {/* end of  menus */}

              <button className='lg:hidden text-white focus:outline-none' onClick={() => setisOpen(!isOpen)}>
                {isOpen ? (

                  <div className="z-8 lg:hidden inset-0 fixed items-center">
                  
                    <div className="nav-bar flex justify-between  mx-auto p-4 items-center">
                        <h1 className="font-bold text-2xl text-yellow-600">FASTNEWS</h1>
                        <i className="fa-solid fa-square-xmark text-2xl"></i>    {/* close icon */}
                    </div>
                    <div className="py-5 space-y-5 flex flex-col  px-8 w-fit ">
             
                        <NavLink to="/" exact className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300"  activeClassName="bg-gray-900">General</NavLink>
                        <NavLink to="/business" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300"  activeClassName="bg-gray-900">business</NavLink>
                        <NavLink to="/entertainment" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300"  activeClassName="bg-gray-900">entertainment</NavLink>
                        <NavLink to="/science" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300"  activeClassName="bg-gray-900 ">science</NavLink>
                        <NavLink to="/technology" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300"  activeClassName="bg-gray-900 ">technology</NavLink>

                    </div>
                  </div> 
                ) : 
                (
                  <i className="fa-solid fa-bars text-xl text-white"></i>
                )}
              </button>
          </nav>
       <div className="border border-b-gray-800 "></div>
   </>
  )
}

export default Navbar





