import React, { Fragment, useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'

const Topbar = () => {
  const authContext = useContext(AuthContext)
  const { user, loading } = authContext

  return (
    <Fragment>
      <div className="row">
        <div className=" col-12 py-3 px-3" style={{ height: '30px' }}>
          <div className="shadow-sm bg-white rounded">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item">Finance</li>
                <li className="breadcrumb-item text-theme-7">Income Statement</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Topbar
