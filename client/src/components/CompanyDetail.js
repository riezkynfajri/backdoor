import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ReactComponent as Undraw } from "../assets/undraw_outdoors_amdn.svg"
import { fetchCompany } from "../store/actions/companyActions"

export default function CompanyDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const company = useSelector(function (state) {
    return state.companies.company
  })
  useEffect(() => {
    dispatch(fetchCompany(id))
  }, [])

  return (
    <div className="container flex flex-col relative w-4/5 h-[150vh] translate-x-[-50%] left-2/4 top-1/2 mt-4 scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="flex flex-col rounded-lg bg-[#1d2226] h-[80vh] mr-4 scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <img
          className="w-full object-cover h-[20vh] opacity-70"
          src={company.companyBanner}
          alt="company banner"
        />
        <img
          className="h-40 w-40  relative border-4 border-zinc-800 border-opacity-90 bottom-[16%] ml-[28px]"
          src={company.companyLogo}
        />
        <div className="flex flex-col h-[10vh] relative w-full mt-16 px-4 bottom-[25%] text-white">
          <h2 className="text-3xl font-semibold">{company.name}</h2>
          <h2 className="text-md text-zinc-400">
            <FontAwesomeIcon icon={faLocationDot} /> {company.location}
          </h2>
          <p className="text-md py-2 text-zinc-100"> {company.description}</p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg mt-4 mr-4 pt-4 pb-20 bg-[#1d2226]">
        <div className="flex flex-col relative w-full pl-4 text-white">
          <h2 className="text-2xl font-semibold text-white mb-4">Job Vacancies</h2>
          {company.Jobs.length === 0 && (
            <div className="h-[40vh] flex flex-col items-center">
              <Undraw className="w-[300px] h-[300px]" />
              <h2 className="text-center text-zinc-400">
                This Company Doesn't have any job vacancies for now
              </h2>
            </div>
          )}

          {company.Jobs.length !== 0 && (
            <div className="grid grid-cols-3 gap-4 h-[40vh] justify-evenly scrollbar-thin w-full scrollbar-thumb-zinc-300 scrollbar-track-transparent overflow-x-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              {company.Jobs.map((job) => {
                return (
                  <div
                    key={job.id}
                    className="border-[1.5px] rounded-lg w-[20vw] border-zinc-600 flex flex-col"
                  >
                    <img
                      className="h-20 w-20 relative border-zinc-800 border-opacity-90 mt-[14px] ml-[14px]"
                      src={company.companyLogo}
                    />
                    <div className="flex flex-col pt-2 pl-4">
                      <h2 className="text-zinc-200 text-lg font-semibold">{job.title}</h2>
                      <h3 className="text-zinc-400 text-sm">{company.name}</h3>
                      <h3 className="text-  zinc-200 text-md mt-4 h-[8vh]">
                        {job.description.split(" ").slice(0, 6).join(" ") + " . . ."}
                      </h3>

                      <h2 className="text-right mr-4">{job.jobType}</h2>
                    </div>
                    <Link
                      className="text-center text-sky-500 hover:text-sky-600"
                      to={`/jobs/${job.id}`}
                    >
                      See Details
                    </Link>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
