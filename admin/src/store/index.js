import { legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const initState = {
  jobs: [],
  job: {},
  companies: [],
  company: {},
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getJobs":
      return { ...state, jobs: action.payload }
    case "getJob":
      return { ...state, job: action.payload }
    case "getCompanies":
      return { ...state, companies: action.payload }
    case "getCompany":
      return { ...state, company: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
