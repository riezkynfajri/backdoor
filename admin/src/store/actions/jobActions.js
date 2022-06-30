export function fetchJobs() {
  return (dispatch, getState) => {
    fetch("https://backdoor-server.herokuapp.com/jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(({ data }) => {
        dispatch({
          type: "getJobs",
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}

export function fetchJob(id) {
  console.log(id)
  return (dispatch, getState) => {
    fetch(`https://backdoor-server.herokuapp.com/jobs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(({ data }) => {
        dispatch({
          type: "getJob",
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}

export function removeJob(id) {
  return (dispatch, getState) => {
    fetch(`https://backdoor-server.herokuapp.com/jobs/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.log(err))
  }
}
