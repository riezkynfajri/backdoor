import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCompany } from "../store/actions/companyActions"

export default function CompanyDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const company = useSelector(function (state) {
    return state.company
  })
  useEffect(() => {
    dispatch(fetchCompany(id))
  }, [])

  return (
    <div className="container flex flex-col relative w-4/5 translate-x-[-50%] left-2/4 top-1/2 mt-4 ">
      <div className="flex flex-col rounded-lg bg-zinc-100 h-[80vh] mr-4">
        <img
          className="w-full object-cover h-[20vh] opacity-70"
          src={company.companyBanner}
          alt="company banner"
        />
        <img
          className="h-40 w-40  relative border-4 border-sky-300 border-opacity-90 bottom-[16%] ml-[28px]"
          src={company.companyLogo}
        />
        <div className="flex flex-col h-[10vh] relative w-full mt-16 px-4 bottom-[25%] text-white">
          <h2 className="text-3xl font-semibold text-zinc-800">{company.name}</h2>
          <h2 className="text-md text-sky-600">
            <FontAwesomeIcon icon={faLocationDot} /> {company.location}
          </h2>
          <p className="text-md py-2 text-zinc-800"> {company.description}</p>
        </div>
      </div>
    </div>
  )
}
