import React from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/haha" element={<h1>diu ni zhi xie</h1>} />
          <Route path=":id" element={<h1>this is home</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="haha">Invoices</Link> | <Link to="haha:123">Dashboard</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
