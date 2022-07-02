import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const inputChange = (e) => {
    const { value, name } = e.target
    setInput({
      ...input,
      [name]: value,
    })
  }

  const login = (e) => {
    e.preventDefault()
    fetch("https://backdoor-server.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
      .then((res) => {
        console.log(res)
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then((data) => {
        console.log(data.message)
        localStorage.setItem("access_token", data.access_token)
        navigate("/")
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <div className="container pt-[20vh]">
      <div className="flex justify-between mx-auto w-3/5  bg-white rounded-lg">
        <div className=" flex flex-col  w-4/5 px-8 mt-4">
          <h2 className="p-2 text-3xl text-zinc-700 border-b-2 border-zinc-600">Backdoor</h2>
          <h2 className="p-2 text-2xl mt-2 text-center text-zinc-500">Signin</h2>
          <form onSubmit={login} className="mt-2 ml-[6.5vw]">
            <input
              type="text"
              value={input.email}
              onChange={inputChange}
              name="email"
              placeholder="email"
              className="text-lg text-zinc-700 my-2 bg-zinc-100 p-2 outline-none border-b-2 border-white hover:border-emerald-500 focus:border-emerald-500 rounded-lg w-72 transition duration-300 "
            />
            <input
              type="password"
              value={input.password}
              onChange={inputChange}
              name="password"
              placeholder="password"
              className="text-lg text-zinc-700 my-2 bg-zinc-100 p-2 outline-none border-b-2 border-white hover:border-emerald-500 focus:border-emerald-500 rounded-lg w-72 transition duration-300"
            />
            <input
              type="submit"
              className="text-md mt-6 mx-12 text-center text-white bg-emerald-500 hover:bg-emerald-600 w-48 rounded-xl py-1.5 cursor-pointer"
            />
          </form>
        </div>
        <img
          className="h-96 w-96 rounded-r-lg opacity-100"
          src="https://img.freepik.com/free-vector/white-faded-gradient-background-vector-with-orange-border_53876-128313.jpg?w=2000"
        />
      </div>
    </div>
  )
}
