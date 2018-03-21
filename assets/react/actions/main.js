export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = () => {
  return dispatch => {
    dispatch({
      type: LOGIN
    })
  }
}
export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}
