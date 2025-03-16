import React from 'react'
import {navLinks} from "../constants/index.js";


export const NavItem = () => {
    return (
        <div>
            <ul className="nav-ul">
                {navLinks.map(link => (
                    <li key={link.id} className="nav-li">
                        <a href={link.href} className="nav-li-a">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


const NavBar = () => {

    const[isToggle, setIsToggle] = React.useState(false);

    const toggleBurger = () => setIsToggle((prevState) => !prevState);

    return (
        <div>
            <header className="fixed left-0 top-0 right-0 z-50 bg-black/90">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center py-5 c-space mx-auto">
                        <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Andre</a>
                        <button onClick={toggleBurger} className="text-neutral-400 font-boldhover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Navigation">
                            <img src={isToggle ? "./assets/close.svg" : "./assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                        </button>
                        <nav className="sm:flex hidden">
                            <NavItem/>
                        </nav>
                    </div>
                </div>
                <div className={`nav-sidebar ${isToggle ? 'max-h-screen' : 'max-h-0'}`}>
                    <nav className="p-5">
                        <NavItem/>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default NavBar
