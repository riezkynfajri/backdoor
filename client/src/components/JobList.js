import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faBriefcase,
  faMoneyCheckDollar,
  faLightbulb,
  faBullseye,
  faEnvelope,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ReactComponent as Undraw } from "../assets/undraw_waiting__for_you_ldha.svg"
import { toRupiah } from "../store/actions/generalActions"
import { fetchJob, fetchJobs } from "../store/actions/jobActions"
import { fetchCompanies } from "../store/actions/companyActions"

export default function JobList() {
  const [localJobs, setLocalJobs] = useState([])
  const [company, setCompany] = useState("All")
  const dispatch = useDispatch()
  const jobs = useSelector(function (state) {
    return state.jobs.jobs
  })
  const job = useSelector(function (state) {
    return state.jobs.job
  })
  const companies = useSelector(function (state) {
    return state.companies.companies
  })
  useEffect(() => {
    dispatch(fetchJobs())
    dispatch(fetchCompanies())
  }, [])

  useEffect(() => {
    setLocalJobs(jobs)
  }, [jobs])

  const execute = () => {
    if (company !== "All") {
      const filteredJobs = jobs.filter((job) => job.companyId === +company)
      setLocalJobs(filteredJobs)
    } else {
      setLocalJobs(jobs)
    }
  }
  const onFilter = (e) => {
    const { value } = e.target
    setCompany(value)
  }
  return (
    <div className="bg-[#1d2226] container relative w-4/5 h-[93.5vh] translate-x-[-50%] left-2/4">
      <div className="flex">
        <div className=" flex flex-col scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-[90vh] w-[40%]">
          <h2 className="text-white bg-sky-900 text-center">Filter By Company</h2>
          <div className="flex pt-1 pb-2 justify-center">
            <select
              onChange={onFilter}
              defaultValue="All"
              className="rounded-lg outline-none bg-zinc-700 w-[15vw] text-zinc-200 text-center cursor-hover"
            >
              <option value="All">All</option>
              {companies.map((el) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                )
              })}
            </select>
            <button
              className="text-zinc-200 px-[8px] ml-4 bg-emerald-600 rounded-lg"
              onClick={execute}
            >
              Submit
            </button>
          </div>
          {localJobs.map((job) => {
            return (
              <div
                onClick={() => dispatch(fetchJob(job.id))}
                key={job.id}
                className="flex border-b-[1px] border-zinc-200 h-[13vh] cursor-pointer hover:bg-emerald-900 duration-[350ms]"
              >
                <img
                  src={job.Company.companyLogo}
                  className="w-16 h-16 mt-2 ml-4"
                  alt="Company Logo"
                />
                <div className="ml-4 mt-2 flex flex-col  text-zinc-100">
                  <a className="text-lg text-sky-500">{job.title}</a>
                  <h2 className="text-md">{job.Company.name}</h2>
                  <h2 className="text-sm text-zinc-400">
                    <span>
                      <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                    </span>
                    {job.Company.location}
                  </h2>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col ml-4 scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl h-[90vh] w-[60%]">
          {job.id && (
            <div className="flex flex-col text-zinc-100 pt-6">
              <h2 className="text-2xl pb-1">{job.title}</h2>
              <h2 className="text-sm pb-4 text-zinc-300">
                <FontAwesomeIcon className=" pr-1" icon={faBuilding} />
                {job.Company.name} <FontAwesomeIcon className="pl-2 pr-1" icon={faLocationDot} />
                {job.Company.location} <FontAwesomeIcon className="pl-2 pr-1" icon={faEnvelope} />{" "}
                {job.Company.email}
              </h2>
              <h2 className="text-lg"> Job description :</h2>
              <h2 className="pb-6 text-md">{job.description}</h2>
              <div className="flex items-center">
                <span>
                  <FontAwesomeIcon className="mr-2" icon={faMoneyCheckDollar} />
                </span>

                {job.minSalary && job.maxSalary && (
                  <p className=" text-sm">
                    Ranges from {toRupiah(job.minSalary)} to {toRupiah(job.maxSalary)}{" "}
                  </p>
                )}
                {job.minSalary && !job.maxSalary && (
                  <p className=" text-sm">Starts from {toRupiah(job.minSalary)}</p>
                )}
                {job.maxSalary && !job.minSalary && (
                  <p className=" text-sm">Upto {toRupiah(job.maxSalary)}</p>
                )}
                {!job.minSalary && !job.maxSalary && (
                  <p className=" text-sm text-zinc-400">No information given</p>
                )}
              </div>

              <div className="pt-2 flex items-center">
                <span>
                  <FontAwesomeIcon className="mr-2" icon={faBriefcase} />
                </span>

                <p className="text-sm">{job.jobType} </p>
              </div>

              <div className="pt-2 flex items-center">
                <span>
                  <FontAwesomeIcon className="mr-2" icon={faBullseye} />
                </span>
                <h2>Benefits</h2>
              </div>
              {job.benefit && (
                <div className="grid grid-cols-2">
                  {job.benefit.split(".").map((el) => {
                    return <p className="text-zinc-100 mt-1">- {el}</p>
                  })}
                </div>
              )}
              {!job.benefit && <p className="ml-2 text-sm">No information given</p>}
            </div>
          )}
          {job.id && (
            <div className="flex flex-col text-zinc-200 pt-4">
              <div className="flex">
                <h2 className="text-lg">
                  <FontAwesomeIcon className="mr-2" icon={faLightbulb} />
                  Skills Required :
                </h2>
              </div>
              {!job.Skills.length && (
                <p className="mt-8 text-lg text-center pb-12 text-zinc-400">No information given</p>
              )}
              {job.Skills.map((skill) => {
                return (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between w-[50%] space-y-1 ml-4"
                  >
                    <h2>{skill.name}</h2>
                    {skill.level === "Beginner" && (
                      <h2 className="ml-2 pt-[0.5px] pb-[1.5px] px-[6px] rounded-xl bg-red-500 bg-opacity-60">
                        {skill.level}
                      </h2>
                    )}
                    {skill.level === "Intermediate" && (
                      <h2 className="ml-2 pt-[0.5px] pb-[1.5px] px-[6px] rounded-xl bg-yellow-500 bg-opacity-60">
                        {skill.level}
                      </h2>
                    )}
                    {skill.level === "Experienced" && (
                      <h2 className="ml-2 pt-[0.5px] pb-[1.5px] px-[6px] rounded-xl bg-sky-500 bg-opacity-60">
                        {skill.level}
                      </h2>
                    )}
                    {skill.level === "Profecient" && (
                      <h2 className="ml-2 pt-[0.5px] pb-[1.5px] px-[6px] rounded-xl bg-green-500 bg-opacity-60">
                        {skill.level}
                      </h2>
                    )}
                  </div>
                )
              })}
            </div>
          )}
          {!job.id && (
            <div className="flex flex-col items-center top-[25%] text-zinc-500 text-2xl  relative text-center">
              <Undraw className="w-[40vw] h-[40vh] mb-8 opacity-60" />
              <h1>Job Details</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
