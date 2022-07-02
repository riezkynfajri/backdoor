import "./App.css"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import CompanyList from "./components/CompanyList"
import JobList from "./components/JobList"
import AdminForm from "./components/AdminForm"
import CompanyDetail from "./components/CompanyDetail"
import JobDetail from "./components/JobDetail"
import Navguard from "./components/Navguard"
import TokenCheck from "./components/TokenCheck"
import ShowNavbar from "./components/ShowNavbar"
function App() {
  return (
    <div className="bg-repeat min-h-screen bg-gradient-to-br from-white to-zinc-400">
      <Routes>
        <Route
          path="/login"
          element={
            <Navguard>
              <Login />
            </Navguard>
          }
        />
        <Route
          path="/"
          element={
            <TokenCheck>
              <ShowNavbar />
            </TokenCheck>
          }
        >
          <Route
            path=""
            element={
              <TokenCheck>
                <CompanyList />
              </TokenCheck>
            }
          />
          <Route
            path="companies/:id"
            element={
              <TokenCheck>
                <CompanyDetail />
              </TokenCheck>
            }
          />
          <Route
            path="jobs"
            element={
              <TokenCheck>
                <JobList />
              </TokenCheck>
            }
          />
          <Route
            path="jobs/:id"
            element={
              <TokenCheck>
                <JobDetail />
              </TokenCheck>
            }
          />
          <Route
            path="admin/add"
            element={
              <TokenCheck>
                <AdminForm />
              </TokenCheck>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
