import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="header p-5 flex items-center justify-between w-full">
        <div>
          <Link to="/" className="text-3xl text-slate-100 font-bold">
            Judy<span className="text-sm">.com</span>
          </Link>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5">
              <button className="uppercase text-slate-100">Home</button>
            </li>
            <li>
              <button className="uppercase text-slate-100">About</button>
            </li>
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
          <button className="btn-primary">Contact Us </button>
        </div>
      </header>
    </>
  )
}
