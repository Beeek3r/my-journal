import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'

const Error = () => {
  const authContext = useContext(AuthContext)
  const { error } = authContext

  return (
    <div className="alert alert-danger mt-5 p-1 px-2" role="alert" style={{ fontSize: '0.9rem' }}>
      <i class="fas fa-times fa-fw" />
      {error.msg}
    </div>
  )
}

export default Error
