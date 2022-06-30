import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCompanies, removeCompany } from "../store/actions/companyActions"
import { Link, useParams } from "react-router-dom"

export default function CompanyList() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const companies = useSelector((state) => state.companies)
  useEffect(() => {
    dispatch(fetchCompanies())
  }, [])

  return (
    <div className="relative pt-12 mx-auto">
      <table className="bg-transparent w-4/5 mx-auto">
        <thead className="bg-white">
          <tr>
            <th className="px-4 w-24 py-4 text-xs text-zinc-700 rounded-tl-xl">Id</th>
            <th className="px-4 w-24 py-4 text-xs text-zinc-700 ">Name</th>
            <th className="px-4 w-36 py-4 text-xs text-zinc-700">Logo</th>
            <th className="px-4 w-56 py-4 text-xs text-zinc-700">Location</th>
            <th className="px-4 w-48 py-4 text-xs text-zinc-700">Email</th>
            <th className="px-4 w-96 py-4 text-xs text-zinc-700">Description</th>
            <th className="px-4 w-96 py-4 text-xs text-zinc-700 rounded-tr-xl">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center mx-auto">
          {companies.map((company) => (
            <tr key={company.id}>
              <td className="px-4 py-4 text-xs text-zinc-700">{company.id}</td>
              <td className="px-4 py-4 text-xs text-zinc-700">{company.name}</td>
              <td className="px-4 py-4 text-xs text-zinc-700">
                <img src={company.companyLogo} alt="logo" className="w-24 h-24" />
              </td>
              <td className="px-4 py-4 text-xs text-zinc-700">{company.location}</td>
              <td className="px-4 py-4 text-xs text-zinc-700">{company.email}</td>
              <td className="px-4 py-4 text-xs text-zinc-700">{company.description}</td>
              <td>
                <Link
                  to={`/companies/${company.id}`}
                  className="text-zinc-200 mr-2 px-2 bg-emerald-600 rounded-xl"
                >
                  See Details
                </Link>
                <button className="text-zinc-200 mr-2 px-2 bg-sky-600 rounded-xl">Edit</button>
                <button
                  onClick={() => removeCompany(company.id)}
                  className="text-zinc-200 px-2 bg-rose-600 rounded-xl"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
