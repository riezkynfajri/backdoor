import { Navigate } from "react-router-dom"
const Navguard = ({ children }) => {
  const token = localStorage.access_token
  if (token) {
    return <Navigate to="/" replace />
  }

  return children
}

export default Navguard
