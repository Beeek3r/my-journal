import React, { Fragment, useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import Error from './Error'
import GuessNavbar from './GuessNavbar'

const Login = props => {
  // Context
  const authContext = useContext(AuthContext)
  const { login, isAuthenticated, error, setError } = authContext

  // State
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { email, password } = user

  // Hooks
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }
  }, [isAuthenticated, props.history])

  // Methods
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    if (email === '') {
      setError({ msg: 'Please enter your email address.' })
    } else if (password === '') {
      setError({ msg: 'Please enter your password.' })
    } else {
      login(user)
    }
  }

  // Return
  return (
    <Fragment>
      <GuessNavbar />
      <div className="container-small container mt-5">
        <h1 className="display-4 text-center">
          Account <span style={{ color: '#4CDBD2' }}>Login</span>
        </h1>

        <form onSubmit={onSubmit} className="mt-5">
          {error && <Error />}
          <div className="form-group ">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" name="email" value={email} onChange={onChange} placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={onChange} placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn btn-theme-7 w-100" style={{ color: '#fff' }}>
            Login
          </button>
        </form>
        <p>Test Username: jamesdoe@gmail.com || Password: 123456</p>
      </div>
    </Fragment>
  )
}

export default Login
