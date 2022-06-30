import { actions } from "../actions/actionTypes"

const initState = {
  jobs: [],
  job: { Company: {}, Skills: [] },
}

export function jobReducers(state = initState, action) {
  switch (action.type) {
    case actions.fetchJobs:
      return { ...state, jobs: action.payload }
    case actions.fetchJob:
      return { ...state, job: action.payload }
    default:
      return state
  }
}
