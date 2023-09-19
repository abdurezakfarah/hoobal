import {
  useState
} from "react"

import {
 NavLink,
 Link,
} from "react-router-dom"


import {
  RiCloseLine
} from "react-icons/ri"

import {
  HiOutlineMenu
} from "react-icons/hi"

import {
  hoobal
} from "../assets"

import {
  mainNavs
} from "../constants"



const NavLinks = ({ links, handleSidebarClose }) => {
  
  return (
    <nav
      className="sx:mt-5 mt-10 p-1"
    >
     {
      links
      .map(link => (
       <NavLink 
         onClick={handleSidebarClose}
         key={link.name}
         to={link.to}
         className="my-6 px-2 py-3 flex flex-row justify-start items-center  text-sm text-slate-200 hover:text-white hover:font-bold"
       >
        <link.icon 
         className="w-6 h-6 mr-2 "
        />        
          <span
          >
          {link.name}
          </span>
       </NavLink>
      ))
     }
    </nav>
  )
}


const Sidebar = () => {
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false)
    
  return (
   <>
  <div
   className="hidden py-10 px-4 md:flex flex-col w-[240px] bg-primary "
  >
    <Link
      to="/"
    >
      <img 
      src={hoobal} 
      alt="Hoobal Logo"
      className="w-full h-28 object-contain"
      />
    </Link>
    <NavLinks 
      links={mainNavs}
    />
    
  </div>
  
  
  <div
    className="flex items-center justify-center absolute block md:hidden top-5 right-2  "
  >
   {
    isMobileMenuOpen
    ? (
      <RiCloseLine 
       className="w-6 h-6 text-white mr-2"
       onClick={() => setIsMobileMenuOpen(false)}
      />
    ) : (
     <HiOutlineMenu 
      className="w-6 h-6 text-white mr-2"
      onClick={() => setIsMobileMenuOpen(true)}
     />
    )
   }
  </div>
  
  <div
   className={`md:hidden absolute  p-6  z-10  top-0 h-screen w-4/5 bg-gradient-to-tl from-slate-400 to-primary backgdrop-blur-lg md:hidden smooth-transition ${isMobileMenuOpen ? "left-0" : "-left-full"}`}
  >
    <Link
      to="/"
    >
      <img 
      src={hoobal} 
      alt="Hoobal Logo"
      className="w-full h-28 object-contain"
      />
    </Link>
    <NavLinks 
      handleSidebarClose={() => setIsMobileMenuOpen(false)}
      links={mainNavs}
    />
    
  </div>
  
  </>
);
}

export default Sidebar;
