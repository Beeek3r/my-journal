import React, { useContext } from 'react'
// import AuthContext from '../../context/auth/authContext'

const Message = () => {
  // const authContext = useContext(AuthContext)
  // const { error } = authContext

  return (
    <div className="row">
      <div className="alert alert-success p-1 mb-4 px-2 w-100" role="alert" style={{ fontSize: '0.9rem' }}>
        {/* {error.msg} */}
        <i class="fas fa-check fa-fw" /> Journal entry has been successfully deleted
      </div>
    </div>
  )
}

export default Message
