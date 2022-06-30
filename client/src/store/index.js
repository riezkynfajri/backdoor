import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { companyReducers } from "./reducers/companyReducers"
import { jobReducers } from "./reducers/jobReducers"

const reducer = combineReducers({
  companies: companyReducers,
  jobs: jobReducers,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
