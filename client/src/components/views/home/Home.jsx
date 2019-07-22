import React, { useContext, useEffect, Fragment } from 'react'
import AuthContext from '../../../context/auth/authContext'
import Navbar from '../../../common/Navbar'
import Topbar from '../../../common/Topbar'
import HomeContent from './HomeContent'

const Home = props => {
  // Context
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container-fluid d-flex p-0">
      <div className="col bg-theme-1 min-vh-100 p-0" id="sideNavbar" style={{ flex: '0 0 225px', display: 'block' }}>
        <div className="position-fixed" style={{ width: '225px' }}>
          <Navbar />
        </div>
      </div>
      <div className="col min-vh-100" style={{ background: '#F5F5F5' }}>
        <Topbar page={props.location.pathname} />
        <HomeContent history={props.history} />
      </div>
    </div>
  )
}

export default Home
