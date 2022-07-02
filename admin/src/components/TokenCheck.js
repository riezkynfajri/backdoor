import { Navigate } from "react-router-dom"

export default function TokenCheck({ children }) {
  const token = localStorage.access_token
  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}
