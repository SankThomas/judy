import React from "react"
import cv from "../assets/judy-cv.pdf"

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 py-10">
        <div className="flex items-center justify-between max-width">
          <h2 className="text-3xl text-slate-100 font-bold">
            Judy<span className="text-sm">.com</span>
          </h2>
          <li className="ml-5">
            <a href={cv} download="Judy - Personal CV" className="btn-primary">
              Download my CV
            </a>
          </li>
        </div>
      </footer>
    </>
  )
}
