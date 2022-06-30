import { actions } from "./actionTypes"

export function fetchJob(id) {
  return (dispatch, getState) => {
    fetch(`https://backdoor-server.herokuapp.com/public/jobs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(({ data }) => {
        dispatch({
          type: actions.fetchJob,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}

export function fetchJobs() {
  return (dispatch, getState) => {
    fetch("https://backdoor-server.herokuapp.com/public/jobs", { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(({ data }) => {
        dispatch({
          type: actions.fetchJobs,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}
