import { useState } from "react"
import { Link } from "react-router-dom"
import cv from "../assets/judy-cv.pdf"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="header p-5 flex items-center justify-between w-full">
        <div className="flex items-center justify-start">
          <Link to="/" className="text-3xl text-slate-100 font-bold">
            Judy<span className="text-sm">.com</span>
          </Link>
          <li className="ml-5">
            <a
              href={cv}
              download="Judy - Personal CV"
              className="text-slate-100"
            >
              Download my CV
            </a>
          </li>
        </div>

        <nav>
          <ul className="flex">
            {/* <li>
              <button className="text-slate-100">Home</button>
            </li> */}
          </ul>
        </nav>

        <div className="hidden">
          <button
            className="uppercase text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
        </div>
      </header>
    </>
  )
}
