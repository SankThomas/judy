import React from "react"

export default function ContactForm() {
  return (
    <>
      <section id="contact" name="contact" className="form bg-white py-20">
        <div className="max-w-3xl mx-auto px-5">
          <h3 className="uppercase text-slate-600 text-xl mb-2">
            looking to hire a civil engineer?
          </h3>
          <h2 className="text-slate-800 uppercase font-bold text-4xl mb-5">
            Contact Me
          </h2>
          <div className="h-1 bg-orange-400 w-20"></div>
        </div>
        <form
          action="https://formsubmit.co/sainajudy@gmail.com"
          method="POST"
          className="max-w-3xl px-5 mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <article>
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                placeholder="Enter your first name"
              />
            </article>

            <article>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                placeholder="Enter your last name"
              />
            </article>
          </div>

          <article>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email address"
            />
          </article>

          <article>
            <label htmlFor="phone">Phone number (Optional)</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
            />
          </article>

          <article>
            <label htmlFor="message">Enter your message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              placeholder="Enter your message"
            ></textarea>
          </article>

          <button type="submit" className="btn-primary mt-5">
            Submit
          </button>
        </form>
      </section>
    </>
  )
}
