import React from "react"

export default function Showcase() {
  return (
    <>
      <section className="showcase">
        <div className="overlay grid grid-cols-1 place-content-center">
          <article className="max-width">
            <h1 className="mb-5 heading-1">
              Civil engineering, home decor <br /> and architecture
            </h1>
            <p className="mb-10 text-slate-300 md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              voluptas enim voluptatum. Vitae nostrum voluptatibus rerum
              laudantium consequatur ut perferendis est repellat sint molestiae
            </p>
            <button className="btn-primary">Contact Us</button>
          </article>
        </div>
      </section>
    </>
  )
}
