import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
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
import { fetchJob } from "../store/actions/jobActions"
import { toRupiah } from "../store/actions/generalActions"

export default function JobDetail() {
  const dispatch = useDispatch()
  const job = useSelector(function (state) {
    return state.jobs.job
  })
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchJob(id))
  }, [])

  return (
    <div>
      <div className="mt-20 bg-[#1d2226] container relative w-4/5 rounded-xl h-[70vh] justify-center translate-x-[-50%] left-2/4">
        <div className="flex flex-col ml-8 scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl h-[70vh] w-[full]">
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

                {job.minSalary !== 0 && job.maxSalary !== 0 && (
                  <p className=" text-sm">
                    Ranges from {toRupiah(job.minSalary)} to {toRupiah(job.maxSalary)}{" "}
                  </p>
                )}
                {job.minSalary !== 0 && job.maxSalary === 0 && (
                  <p className=" text-sm">Starts from {toRupiah(job.minSalary)}</p>
                )}
                {job.maxSalary !== 0 && job.minSalary == 0 && (
                  <p className=" text-sm">Upto {toRupiah(job.maxSalary)}</p>
                )}
                {job.minSalary === 0 && job.maxSalary === 0 && (
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
                <div className="grid grid-cols-2 w-[61vw]">
                  {job.benefit.split(".").map((el) => {
                    return <p className="text-zinc-100 mt-1">{el}</p>
                  })}
                </div>
              )}
              {job.benefit === "" && <p className="ml-8 text-sm">No information given</p>}
            </div>
          )}

          <div className="flex flex-col text-zinc-200 pt-4">
            <div className="flex">
              <h2 className="text-lg">
                <FontAwesomeIcon className="mr-2" icon={faLightbulb} />
                Skills Required :
              </h2>
            </div>
            {job.Skills.length > 0 &&
              job.Skills.map((skill) => {
                return (
                  <div key={skill.id} className="flex items-center ml-8 space-y-1">
                    <h2>{skill.name}</h2>
                    {skill.level === "Beginner" && (
                      <h2 className="ml-2 py-[0.5px] px-[6px] rounded-xl bg-red-500 bg-opacity-70">
                        {skill.level}
                      </h2>
                    )}
                    {skill.level === "Intermediate" && (
                      <h2 className="ml-2 py-[0.5px] px-[6px] rounded-xl bg-yellow-500 bg-opacity-70">
                        {skill.level}
                      </h2>
                    )}
                    {skill.level === "Experienced" && (
                      <h2 className="ml-2 py-[0.5px] px-[6px] rounded-xl bg-sky-500 bg-opacity-70">
                        {skill.level}
                      </h2>
                    )}
                    {skill.level === "Profecient" && (
                      <h2 className="ml-2 py-[0.5px] px-[6px] rounded-xl bg-green-500 bg-opacity-70">
                        {skill.level}
                      </h2>
                    )}
                  </div>
                )
              })}
            {!job.Skills.length && (
              <p className="mt-8 text-lg text-center pb-12 text-zinc-400">No information given</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
