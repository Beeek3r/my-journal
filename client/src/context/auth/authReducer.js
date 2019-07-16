import { LOGIN_SUCCESS, LOAD_USER, LOGIN_FAIL, CLEAR_ERROR, SET_ERROR, REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR, LOGOUT } from '../types'

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: action.payload
      }
    }
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      }

    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false
      }

    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
