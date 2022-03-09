import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Header, Home } from "./components"
import { Error } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
