import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [open, setOpen] = useState(false)

  return (
    <header>
        <nav className="flex h-auto w-auto bg-white shadow-lg rounded-lg justify-between md:h-16">
            <div className="flex w-full justify-between ">
                <div className={open ? 'hidden':'flex px-6 w-1/2 items-center font-semibold md:w-1/5 md:px-1 md:flex md:items-center md:justify-center'} >
                    <a href="">World of Boxing</a>
                </div>
                <div  
                    className={open ? 'flex flex-col w-full h-auto md:hidden':'hidden'}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/estilos">Estilos de Boxeo</NavLink>
                        <NavLink to="/contacto">Contacto</NavLink> 
                    </div>
                </div>
                <div className="hidden w-3/5 items-center justify-evenly font-semibold
                md:flex">
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/estilos">Estilos de Boxeo</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                </div>
                <div className="hidden w-1/5 items-center justify-evenly font-semibold
                md:flex">
                    <button>Iniciar Sesion</button>
                    <button>Registrarse</button>
                </div>
                <button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white
                                md:hidden
                                " onClick={() => setOpen(!open)}>
                    <span className="sr-only">Open main menu</span>
                    <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" className={open ? 'rotate-45 block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out':'-translate-y-1.5 block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out' }></span>
                        <span aria-hidden="true" className={open ? 'opacity-0 block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out' : 'block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out' }></span>
                        <span aria-hidden="true" className={open ? '-rotate-45 block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out' : ' translate-y-1.5 block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out'}></span>
                    </div>
                </button>
            </div>
        </nav>
    </header>
    )
}


export default Header