import { Link } from "react-router-dom"

export default function Error() {
  return (
    <>
      <section className="max-width flex flex-col items-center justify-center h-screen">
        <h6 className="text-center text-xl mb-10 text-slate-900">
          Error 404 |{" "}
          <span className="text-base text-slate-700">
            Sorry, the page you were looking for does not exist or may have
            moved
          </span>
        </h6>
        <Link to="/" className="btn-secondary">
          &larr; Back to Homepage
        </Link>
      </section>
    </>
  )
}
