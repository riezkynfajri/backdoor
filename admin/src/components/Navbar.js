import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDungeon,
  faBuilding,
  faBriefcase,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Navbar() {
  const navigate = useNavigate()
  function signout() {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <nav className="flex items-center justify-between w-full flex-wrap bg-zinc-200 px-12 pt-2">
      <div className="flex items-center flex-shrink-0 text-[#1d2226] mb-2 mr-2">
        <Link
          to={"/"}
          className="hover:text-yellow-500 border-b-2 duration-300 border-zinc-200 cursor-pointer font-semibold text-xl tracking-tight"
        >
          <span className="text-xl mr-2">
            <FontAwesomeIcon icon={faDungeon} />
          </span>
          Backdoor
        </Link>
      </div>
      <div className="w-auto block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow px-2">
          <Link
            to={"/"}
            className="border-b-2 border-zinc-200 text-center hover:border-sky-700 mx-1.5 text-xs cursor-pointer duration-300 block mt-4 lg:inline-block lg:mt-0 text-[#1d2226] hover:text-sky-700 mr-4"
          >
            <span className=" flex flex-col text-xl">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            Companies
          </Link>

          {/* <button className="border-b-2 border-zinc-200 text-center hover:border-sky-700 mx-1.5 text-xs cursor-pointer duration-300 block mt-4 lg:inline-block lg:mt-0 text-[#1d2226] hover:text-sky-700 mr-4">
            <span className=" flex flex-col text-xl">
              <FontAwesomeIcon icon={faUser} />
            </span>
            My Profile
          </button> */}

          <Link
            to={"/jobs"}
            className="border-b-2 border-zinc-200 text-center hover:border-sky-700 mx-1.5 text-xs cursor-pointer duration-300 block mt-4 lg:inline-block lg:mt-0 text-[#1d2226] hover:text-sky-700 mr-4"
          >
            <span className=" flex flex-col text-xl">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Jobs
          </Link>
        </div>
        <div>
          <button
            onClick={signout}
            className="text-xs border-b-2 hover:border-rose-600 focus:border-rose-500 duration-500 border-zinc-200 cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-[#1d2226] hover:text-rose-600"
          >
            <span className=" flex flex-col text-xl">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  )
}
