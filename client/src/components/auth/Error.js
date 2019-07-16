import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'

const Error = () => {
  const authContext = useContext(AuthContext)
  const { error } = authContext

  const styles = {
    button: {
      fontSize: '0.9rem'
    }
  }

  return (
    <div className="alert alert-danger mt-5 p-1 px-2 text-center" role="alert" style={styles.button}>
      <i class="fas fa-times fa-fw px-3" />
      {error.msg}
    </div>
  )
}

export default Error
