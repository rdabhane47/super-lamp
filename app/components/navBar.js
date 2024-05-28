// 'use client'
// import React, { useState } from 'react';
// import { Link } from 'next/link';

// import { Menu, X } from "lucide-react";
// // import { NavLink } from 'react-router-dom';

// const NavLinks = () => {
//     return (
//         <div className="w-1/3 ">
//             <Link href="/about">About</Link>
//             <Link href="/contact us">Contact Us</Link>
//             <Link href="courses">Courses</Link>
//         </div>
//     )
// }
// const NavBar = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };
//     return (
//         <>
//             <nav className="w-1/3 justify-end flex">
//                 <div className=" justify-between hidden w-full md:flex">
//                     {/* <NavLinks /> */}

//                 </div>
//                 <div className="md:hidden">
//                     <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
//                 </div>
//             </nav>
//             {isOpen && (
//                 <div className="flex basis-full flex-col items-center" >
//                     <NavLinks />
//                 </div>
//             )}
//         </>
//     )
// }

// export default NavBar
'use client'
import { motion } from "framer-motion";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// import './styles.css';


const NavLink = () => {

  const links = [


    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contactus', label: 'Contact Us' },
    { href: '/courses', label: 'Courses' },
    {
        href:'/login' ,label:'Login'
    }
    

    
  ]
  const path = usePathname();

  return (
    <header className="header-main ">
        <div className="flex p-4 justify-between"> 
      {/* <div className="header-main-logo bg-yellow-600 p-4 flex justify-between items-center w-full"> */}
        <Link href='/' passHref className=' p-2' >
          <div className="my_bg_image"></div>
        </Link>
        <nav className="header-main-nav flex justify-end gap-5 pt-5">
          <ul className=" flex gap-4">
            {

              links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <ul>
                      <h1> {link.label}</h1>
                      {link.href === path && <motion.div layoutId="underline" className="underline h-[2px] bg-white"></motion.div>}
                    </ul>
                  </Link>
                </li>
              ))
            }
          </ul>


        </nav>



      </div>





    </header>


  )
}
export default NavLink;
