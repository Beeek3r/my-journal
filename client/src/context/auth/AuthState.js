import React, { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import axios from 'axios'
import { LOGIN_SUCCESS, LOAD_USER, CLEAR_ERROR, LOGIN_FAIL, SET_ERROR, REGISTER_FAIL, AUTH_ERROR, LOGOUT } from '../types'
import setAuthToken from '../../utilities/setAuthToken'
import { REGISTER_SUCCESS } from '../types'

const AuthState = props => {
  // State & Reducer
  const intialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  }

  const [state, dispatch] = useReducer(authReducer, intialState)
  const { token, isAuthenticated, loading, error, user } = state

  // Login
  const login = async formData => {
    try {
      const res = await axios.post('/api/auth', formData)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
      loadUser()
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data })
    }
  }

  // Register new user
  const register = async formData => {
    try {
      const res = await axios.post('/api/users', formData)
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.token })
      loadUser()
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data })
    }
  }

  // Load user
  const loadUser = async () => {
    if (localStorage.token) setAuthToken(localStorage.getItem('token'))
    try {
      const res = await axios.get('/api/auth')
      dispatch({ type: LOAD_USER, payload: res.data })
    } catch (err) {
      dispatch({ type: AUTH_ERROR })
    }
  }

  // Set Error
  const setError = error => {
    dispatch({ type: SET_ERROR, payload: error })
  }

  // Clear Error
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR })
  }

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  // Return
  return (
    <AuthContext.Provider
      value={{
        token: token,
        isAuthenticated: isAuthenticated,
        loading: loading,
        error: error,
        user: user,
        login,
        clearError,
        setError,
        register,
        loadUser,
        logout
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
