import { actions } from "../actions/actionTypes"

const initState = {
  companies: [],
  company: { Jobs: [] },
  count: {},
}

export function companyReducers(state = initState, action) {
  switch (action.type) {
    case actions.fetchCompanies:
      return { ...state, companies: action.payload }
    case actions.fetchCompany:
      return { ...state, company: action.payload }
    case actions.fetchCount:
      return { ...state, count: action.payload }
    default:
      return state
  }
}
