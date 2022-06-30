import { actions } from "./actionTypes"

export function fetchCompany(id) {
  return (dispatch, getState) => {
    fetch(`https://backdoor-server.herokuapp.com/public/companies/${id}`, { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(({ data }) => {
        dispatch({
          type: actions.fetchCompany,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}

export function fetchCompanies() {
  return (dispatch, getState) => {
    fetch("https://backdoor-server.herokuapp.com/public/companies", { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(({ data }) => {
        dispatch({
          type: actions.fetchCompanies,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}
