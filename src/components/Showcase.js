import React from "react"

export default function Showcase() {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <div className="max-width grid grid-cols-1 place-items-center h-screen">
            <article className="text-center">
              <h1 className="mb-5 heading-1">Civil Engineer, Home Decorator</h1>
              <p className="mb-10 text-slate-300">
                I advise, coordinate and supervize the technical aspects of road
                and building construction projects.
              </p>
              <a href="#timeline" className="btn-primary">
                View Work Timeline
              </a>
            </article>

            {/* <article></article> */}
          </div>
        </div>
      </section>
    </>
  )
}
