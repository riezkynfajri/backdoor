import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faDoorOpen } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchCompanies } from "../store/actions/companyActions"

export default function CompanyList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const companies = useSelector(function (state) {
    return state.companies.companies
  })

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [])

  return (
    <div className="container relative w-[90vw] h-[93.5vh] translate-x-[-50%] left-2/4 scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="grid grid-cols-2 gap-4 justify-items-center mt-8">
        {companies.map((company) => {
          return (
            <div
              onClick={() => navigate(`/companies/${company.id}`)}
              key={company.id}
              className="cursor-pointer hover:scale-[1.02] duration-[400ms] w-[40vw] flex flex-col"
            >
              <img
                className="object-cover rounded-t-sm w-full h-[15vh] opacity-70"
                src={company.companyBanner}
                alt=""
              />
              <img
                className="h-16 w-16 bottom-[9vh] relative border-2 border-zinc-800 border-opacity-90 ml-[28px]"
                src={company.companyLogo}
                alt=""
              />
              <div className="px-4 flex relative bottom-[9vh] flex-col bg-[#1d2226] h-[25vh] rounded-b-sm">
                <h2 className="text-zinc-200 text-lg font-semibold">{company.name}</h2>
                <h3 className="text-zinc-400 text-xs">
                  <FontAwesomeIcon icon={faLocationDot} className="pr-1" /> {company.location}
                </h3>
                <h3 className="text-zinc-200 h-[5vh] text-md mt-4">
                  {company.description.split(" ").slice(0, 15).join(" ") + " . . ."}
                </h3>

                <div className="flex mt-8 relative justify-end text-zinc-200">
                  <FontAwesomeIcon className="mr-2 mt-1" icon={faDoorOpen} />
                  <h2 className="cursor-default">{company.Jobs.length} Job Vacancies</h2>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
