import React, { useState } from 'react'
import Data from '../data/data-slider.json'

const Slider = () => {

    const [slide, setSlide] = useState(0)
    const [active, setActive] = useState(0)

    const handleRotation = (index) => {
        setSlide(index)
        setActive(index)
    }

  return (
    <div
    className="px-2 md:px-6 my-3 w-full text-slate-700 flex flex-col items-center mt-16"
>
    <div className="text-left flex flex-col w-full items-center justify-center md:p-4 rounded-xl">
        <div className="w-full">
            <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="bg-white rounded-xl w-full flex flex-col md:flex-row justify-start shadow-md transition-all duration-100 md:hover:scale-95"
            >
                <img
                    className="w-full md:w-1/2 h-40 md:h-64 object-cover rounded-tl-xl rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl"
                    src={Data[slide].imagen}
                    alt={Data[slide].nombre}
                />

                <div className="w-full xl:w-1/2 p-3 flex flex-col justify-between h-40 md:h-64 overflow-auto">
                    <div>
                        <div className="flex flex-col md:w-full text-xs text-left">
                            <h2 className="text-blue-600 font-bold uppercase text-md">
                                Noticias
                            </h2>
                        </div>
                        <p className="text-left text-sm md:text-lg xl:text-xl font-bold leading-normal">
                            {Data[slide].nombre}
                        </p>
                        <p className="text-left text-xs md:text-sm text-slate-700 font-normal leading-normal">
                            {Data[slide].descripcion}
                        </p>
                    </div>
                    <p className="flex text-left text-xs md:text-sm text-blue-700 font-bold leading-normal items-center">
                        <svg
                            height="21"
                            viewBox="0 0 21 21"
                            width="21"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="translate(6 6)"
                            >
                                <path d="m8.5 7.5v-7h-7"></path>
                                <path d="m8.5.5-8 8"></path>
                            </g>
                        </svg>
                        Ir a la noticia
                    </p>
                </div>
            </a>
        </div> 
        <div className="lg:px-4 w-full mt-2">
            <div className="flex justify-center">
                <div className="bg-white rounded-xl shadow-md flex w-full lg:w-1/2 p-2 justify-between h-12 lg:h-fit items-center">
                    <button
                        className="border-slate-500 hover:text-blue-500 border hover:border-blue-500 w-6 h-6 rounded-xl duration-150 hover:scale-105 active:scale-95"
                        onClick={() => {
                            if (slide === 0) {
                                setSlide(Data.length - 1)
                                setActive(Data.length - 1)
                            } else {
                                setSlide(slide - 1)
                                setActive(slide - 1)
                            }
                        }}
                    >
                        <svg
                            height="22"
                            viewBox="0 0 21 21"
                            width="22"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="translate(2 2)"
                            >
                                <path d="m9.55 11.4-3-2.9 3-3"></path>
                            </g>
                        </svg>
                    </button>
                    {Data.map((item, index) => (
                    <button
                        onClick={() => handleRotation(index)}
                        className={active === index ? 'bg-blue-500 text-white w-6 h-6 rounded-xl duration-150 hover:scale-105 active:scale-95' : 'border-slate-500 hover:text-blue-500 border hover:border-blue-500 w-6 h-6 rounded-xl duration-150 hover:scale-105 active:scale-95'}
                    >
                        {index + 1}
                    </button>
                    ))}
                    <button
                        className="border-slate-500 hover:text-blue-500 border hover:border-blue-500 w-6 h-6 rounded-xl duration-150 hover:scale-105 active:scale-95"
                        onClick={() => {
                            if (slide === Data.length - 1) {
                                setSlide(0)
                                setActive(0)
                            } else {
                                setSlide(slide + 1)
                                setActive(slide + 1)
                            }
                        }}
                    >
                        <svg
                            height="22"
                            viewBox="0 0 21 21"
                            width="22"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="translate(2 2)"
                            >
                                <path d="m7.5 11.5 3-3-3.068-3"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Slider