import { NavLink } from "react-router-dom";
import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);    

 return (
   <>

      <nav className="px-4 py-6  flex justify-between items-center mx-auto max-w-7xl ">
          <h1 className="font-bold text-xl text-yellow-600 lg:text-2xl ">FASTNEWS</h1>

          {/* mobile navbar */}
            <div className="block lg:hidden bg-red-500">

              <button
                onClick={() => setisOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (

                  <div id="nav-toggle" className="fixed z-10 lg:hidden inset-0  ">

                    <div className="nav-bar flex justify-between  mx-auto p-4 items-center">
                        <h1 className="font-bold text-2xl text-yellow-600">FASTNEWS</h1>
                        <i className="fa-solid fa-square-xmark text-2xl"></i>    {/* close icon */}
                    </div>

                    <div className="toggle-menu py-5 space-y-5 flex flex-col w-fit px-8 lg:flex  ">
             
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
            </div>
          {/*end of mobile navbar */}

          {/* start menus */}

          <div className={`lg:flex lg:space-x-5 items-center ${isOpen ? "block" : "hidden"}`}>
            <NavLink to="/" exact className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">General</NavLink>
            <NavLink to="/business" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">Business</NavLink>
            <NavLink to="/entertainment" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">Entertainment</NavLink>
            <NavLink to="/science" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">Science</NavLink>
            <NavLink to="/technology" className="text-yellow-600 font-bold border border-yellow-600 px-4 rounded-md py-1 hover:text-white transition duration-300" activeClassName="bg-gray-900">Technology</NavLink>
          </div>
          {/* end of  menus */}

        </nav>
       

        <div className="border border-b-gray-800 "></div>
   </>
  )
}

export default Navbar





