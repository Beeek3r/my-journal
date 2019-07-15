import React, { useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import AuthContext from '../../../context/auth/authContext'

const NotFound = props => {
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  return <Redirect path="/" />
}

export default NotFound
