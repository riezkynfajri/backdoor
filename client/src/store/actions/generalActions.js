import { actions } from "./actionTypes"

export function toRupiah(val) {
  const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(val)
  return rupiah
}

export function fetchCount() {
  return (dispatch, getState) => {
    fetch("https://backdoor-server.herokuapp.com/public", { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(({ data }) => {
        dispatch({
          type: actions.fetchCount,
          payload: data,
        })
      })
      .catch((err) => console.log(err))
  }
}
