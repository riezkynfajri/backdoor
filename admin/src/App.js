import "./App.css"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import CompanyList from "./components/CompanyList"
import JobList from "./components/JobList"
import AdminForm from "./components/AdminForm"
import Navbar from "./components/Navbar"
import CompanyDetail from "./components/CompanyDetail"
import JobDetail from "./components/JobDetail"
function App() {
  return (
    <div className="bg-repeat min-h-screen bg-gradient-to-br from-white to-zinc-400">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CompanyList />} />
        <Route path="/companies/:id" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/admin/add" element={<AdminForm />} />
      </Routes>
    </div>
  )
}

export default App
