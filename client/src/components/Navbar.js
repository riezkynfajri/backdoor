import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDungeon,
  faBuilding,
  faBriefcase,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full flex-wrap bg-[#1d2226] px-12 pt-2">
      <div className="flex items-center flex-shrink-0 text-zinc-300 mb-2 mr-2">
        <Link
          to={"/"}
          className="hover:text-yellow-300 border-b-2 duration-300 border-[#1d2226] cursor-pointer font-semibold text-xl tracking-tight"
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
            to={"/companies"}
            className="border-b-2 border-[#1d2226] text-center hover:border-sky-200 mx-1.5 text-xs cursor-pointer duration-300 block mt-4 lg:inline-block lg:mt-0 text-zinc-300 hover:text-sky-200 mr-4"
          >
            <span className=" flex flex-col text-xl">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            Companies
          </Link>

          {/* <button className="border-b-2 border-[#1d2226] text-center hover:border-sky-200 mx-1.5 text-xs cursor-pointer duration-300 block mt-4 lg:inline-block lg:mt-0 text-zinc-300 hover:text-sky-200 mr-4">
            <span className=" flex flex-col text-xl">
              <FontAwesomeIcon icon={faUser} />
            </span>
            My Profile
          </button> */}

          <Link
            to={"/jobs"}
            className="border-b-2 border-[#1d2226] text-center hover:border-sky-200 mx-1.5 text-xs cursor-pointer duration-300 block mt-4 lg:inline-block lg:mt-0 text-zinc-300 hover:text-sky-200 mr-4"
          >
            <span className=" flex flex-col text-xl">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Jobs
          </Link>
        </div>
        <div>
          {/* <button className="text-xs border-b-2 hover:border-rose-500 focus:border-rose-500 duration-500 border-[#1d2226] cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-zinc-300 hover:text-rose-400">
            <span className=" flex flex-col text-xl">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            Sign Out
          </button> */}
        </div>
      </div>
    </nav>
  )
}
