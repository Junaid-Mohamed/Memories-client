import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import Login from "./pages/Login"


function App() {

  return (
    <>
     <Router>
     <main>
      <Routes>

          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />

      </Routes>
      </main>
     </Router>
    </>
  )
}

export default App
