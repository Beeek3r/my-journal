import React, { Fragment, useState, useContext, useEffect } from 'react'
import GuessNavbar from './GuessNavbar'
import AuthContext from '../../context/auth/authContext'
import Error from './Error'

const Register = props => {
  // Context
  const authContext = useContext(AuthContext)
  const { register, isAuthenticated, error, setError } = authContext

  // State
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  })
  const { firstName, lastName, email, password, password2 } = user

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

    if (firstName === '' || lastName === '' || email === '' || password === '' || password2 === '') {
      setError({ msg: 'Please enter in all fields' })
    } else if (password !== password2) {
      setError({ msg: 'Passwords do not match' })
    } else if (password.length < 6 || password.length > 20) {
      setError({ msg: 'Passwords must be between 6-20 characters long' }, 2000)
    } else {
      register(user)
    }
  }

  return (
    <Fragment>
      <GuessNavbar />
      <div className="container-small container mt-5">
        <h1 className="display-4 text-center">
          Account <span style={{ color: '#4CDBD2' }}>Register</span>
        </h1>
        <form onSubmit={onSubmit} className="mt-5">
          {error && <Error />}
          <div className="form-group">
            <label htmlFor="email">First Name</label>
            <input type="text" className="form-control" name="firstName" value={firstName} onChange={onChange} placeholder="Enter first name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Last Name</label>
            <input type="text" className="form-control" name="lastName" value={lastName} onChange={onChange} placeholder="Enter last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" name="email" value={email} onChange={onChange} placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={onChange} placeholder="Enter password" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" className="form-control" name="password2" value={password2} onChange={onChange} placeholder="Confirm password" required />
          </div>
          <button type="submit" className="btn btn-theme-7 w-100" style={{ color: '#fff' }}>
            Login
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default Register
