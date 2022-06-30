import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchJob, fetchJobs, removeJob } from "../store/actions/jobActions"
import { Link, useParams } from "react-router-dom"

export default function JobList() {
  const { id } = useParams
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs)

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  return (
    <div className="relative pt-12 mx-auto">
      <table className="bg-transparent w-4/5 mx-auto">
        <thead className="bg-white">
          <tr>
            <th className="px-4 w-24 py-4 text-xs text-zinc-700 rounded-tl-xl">Id</th>
            <th className="px-4 w-36 py-4 text-xs text-zinc-700">Title</th>
            <th className="px-4 w-56 py-4 text-xs text-zinc-700">Job Type</th>
            <th className="px-4 w-48 py-4 text-xs text-zinc-700">Min Salary</th>
            <th className="px-4 w-48 py-4 text-xs text-zinc-700">Max Salary</th>
            <th className="px-4 w-96 py-4 text-xs text-zinc-700">Description</th>
            <th className="px-4 w-96 py-4 text-xs text-zinc-700">Vacancy</th>
            <th className="px-4 w-96 py-4 text-xs text-zinc-700 rounded-tr-xl">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center mx-auto">
          {jobs.map((job) => {
            return (
              <tr key={job.id}>
                <td className="px-4 py-4 text-xs text-zinc-700">{job.id}</td>
                <td className="px-4 py-4 text-xs text-zinc-700">{job.title}</td>

                <td className="px-4 py-4 text-xs text-zinc-700">{job.jobType}</td>
                <td className="px-4 py-4 text-xs text-zinc-700">{job.minSalary}</td>
                <td className="px-4 py-4 text-xs text-zinc-700">{job.maxSalary}</td>
                <td className="px-4 py-4 text-xs text-zinc-700">
                  {job.description.split(" ").slice(0, 20).join(" ") + " . . ."}
                </td>
                <td className="px-4 py-4 text-xs text-zinc-700">{job.vacancy}</td>
                <td className="px-4 py-4 text-xs text-zinc-700">
                  <Link
                    to={`/jobs/${job.id}`}
                    className="mr-2 bg-emerald-600 rounded-full px-2 py-1 text-white"
                  >
                    See Details
                  </Link>
                  <button className="mr-2 bg-sky-600 rounded-full px-2 py-1 text-white">
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeJob(job.id))}
                    className="bg-rose-600 rounded-full px-2 py-1 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
