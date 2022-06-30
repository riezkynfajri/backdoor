import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import JobList from "./components/JobList"
import CompanyList from "./components/CompanyList"
import CompanyDetail from "./components/CompanyDetail"
import JobDetail from "./components/JobDetail"
// import Profile from "./components/my-profile"

function App() {
  return (
    <div className="bg-repeat min-h-screen bg-black ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:id" element={<CompanyDetail />} />
      </Routes>
    </div>
  )
}

export default App
