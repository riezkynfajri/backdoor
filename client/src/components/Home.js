import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDungeon, faBuilding, faDoorOpen, faUser } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"
import backdoor from "../assets/backdoor.png"
import { fetchCount } from "../store/actions/generalActions"

export default function Home() {
  const dispatch = useDispatch()
  const count = useSelector(function (state) {
    return state.companies.count
  })

  useEffect(() => {
    dispatch(fetchCount())
  }, [])

  return (
    <div className="flex relative pt-[28px] justify-center left-2/4 translate-x-[-50%] h-[90vh]">
      <img src={backdoor} className="rounded-l-xl object-cover w-[35vw]" />
      <div className="bg-[#1d2226] flex flex-col justify-evenly pt-4 text-zinc-200 pl-8 w-3/5 rounded-r-xl">
        <h1 className="font-semibold text-5xl mb-12 text-yellow-300">
          <span>
            <FontAwesomeIcon icon={faDungeon} /> Backdoor
          </span>
        </h1>
        <p className="text-md text-left mb-24 pr-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam eligendi repellat?
          Itaque sint magni harum nulla eum animi, aspernatur molestiae non provident asperiores
          nihil totam neque, quod possimus. Dolore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti quam eligendi repellat? Itaque sint magni harum nulla eum
          animi, aspernatur molestiae non provident asperiores nihil totam neque, quod possimus.
          Dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam eligendi
          repellat? Itaque sint magni harum nulla eum animi, aspernatur molestiae non provident
          asperiores nihil totam neque, quod possimus. Dolore.
        </p>
        <div className="flex justify-center space-x-[6vw] ">
          <h2>
            <FontAwesomeIcon className="mr-2" icon={faBuilding} /> {count.companies} registered
            companies
          </h2>
          <h2>
            <FontAwesomeIcon className="mr-2" icon={faDoorOpen} /> {count.jobs} job oportunities
          </h2>
          {/* <h2>
            <FontAwesomeIcon className="mr-2" icon={faUser} /> {count.users} fellow users
          </h2> */}
        </div>
      </div>
    </div>
  )
}
