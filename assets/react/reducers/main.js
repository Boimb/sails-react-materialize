import { LOGIN, LOGOUT} from "../actions/main";


const initialState = {
  user: {
    id: null,
    isAuthenticated: false,
    name: null,
    token: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {isAuthenticated: true})
    case LOGOUT:
      return Object.assign({}, state, {isAuthenticated: false})
    default:
      return state
  }

}
