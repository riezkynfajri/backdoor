export function fetchCompanies() {
  return (dispatch, getState) => {
    fetch("https://backdoor-server.herokuapp.com/companies", {
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
          type: "getCompanies",
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}

export function fetchCompany(id) {
  return (dispatch, getState) => {
    fetch(`https://backdoor-server.herokuapp.com/companies/${id}`, {
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
          type: "getCompany",
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}

export function removeCompany(id) {
  return (dispatch, getState) => {
    fetch(`https://backdoor-server.herokuapp.com/companies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .catch((err) => console.log(err))
  }
}
