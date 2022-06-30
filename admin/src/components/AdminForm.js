import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminForm() {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
    address: "",
  })

  const inputChange = (e) => {
    const { value, name } = e.target
    setInput({
      ...input,
      [name]: value,
    })
  }

  const addAdmin = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then((data) => {
        console.log(data.message)
        navigate("/")
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-zinc-0 max-w-xl mx-auto p-8 md:p-12 rounded-lg shadow-lg">
      <div>
        <h1 className="text-4xl font-bold text-zinc-800 text-center">Create an Admin Account</h1>
      </div>
      <div className="mt-10">
        <form onSubmit={addAdmin} className="flex flex-col items-center" method="post">
          <div className="mb-6 pt-3 rounded bg-zinc-50">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                name="username"
                value={input.username}
                onChange={inputChange}
                placeholder="Username"
                type="text"
                style={{ width: "450px" }}
                className="placeholder:text-zinc-600 bg-zinc-50 rounded text-zinc-700 focus:outline-none border-b-4 border-zinc-50 focus:border-sky-600 transition duration-500 px-3 pb-3"
              />
            </div>
          </div>

          <div className="mb-6 pt-3 rounded bg-zinc-50">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                value={input.email}
                onChange={inputChange}
                name="email"
                placeholder="Email"
                type="text"
                style={{ width: "450px" }}
                className="placeholder:text-zinc-600 bg-zinc-50 rounded text-zinc-700 focus:outline-none border-b-4 border-zinc-50 focus:border-sky-600 transition duration-500 px-3 pb-3"
              />
            </div>
          </div>

          <div className="mb-6 pt-3 rounded bg-zinc-50">
            <div className="flex items-center">
              <input
                value={input.password}
                onChange={inputChange}
                name="password"
                placeholder="Password"
                type="password"
                style={{ width: "450px" }}
                className="placeholder:text-zinc-600 bg-zinc-50 rounded text-zinc-700 focus:outline-none border-b-4 border-zinc-50 focus:border-sky-600 transition duration-500 px-3 pb-3"
              />
            </div>
          </div>

          <div className="mb-6 pt-3 rounded bg-zinc-50">
            <div className="flex items-center">
              <input
                value={input.phoneNumber}
                onChange={inputChange}
                name="phoneNumber"
                placeholder="Phone number"
                type="number"
                style={{ width: "450px" }}
                className="placeholder:text-zinc-600 bg-zinc-50 rounded text-zinc-700 focus:outline-none border-b-4 border-zinc-50 focus:border-sky-600 transition duration-500 px-3 pb-3"
              />
            </div>
          </div>

          <div className="mb-6 pt-3 rounded bg-zinc-50">
            <div className="flex items-center">
              <input
                value={input.address}
                onChange={inputChange}
                name="address"
                placeholder="Address"
                type="text"
                style={{ width: "450px" }}
                className="placeholder:text-zinc-600 bg-zinc-50 rounded text-zinc-700 focus:outline-none border-b-4 border-zinc-50 focus:border-sky-600 transition duration-500 px-3 pb-3"
              />
            </div>
          </div>

          <input
            className="hover:bg-gradient-to-t from-zinc-200 via-sky-600 to-transparent bg-sky-600 text-white hover:text-zinc-600 font-bold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-200"
            type="submit"
            style={{ width: "200px" }}
            value="Submit"
          />
        </form>
      </div>
    </div>
  )
}
