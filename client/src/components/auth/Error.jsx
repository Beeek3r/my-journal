import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'

const Error = () => {
  const authContext = useContext(AuthContext)
  const { error, clearError } = authContext

  const styles = {
    button: {
      fontSize: '0.9rem'
    }
  }

  return (
    <div className="alert alert-danger mt-5 p-1 px-2 text-center" role="alert" style={styles.button}>
      <span className="float-right errorButtonClose" onClick={clearError}>
        <i className="fas fa-times-circle fa-fw" />
      </span>
      {error.msg}
    </div>
  )
}

export default Error
