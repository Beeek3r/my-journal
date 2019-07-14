import React from 'react'
import Navbar from './Navbar'
import Routes from '../routes/Routes'
import Topbar from './Topbar'

const Layout = (props) => {
  return (
    <div className="container-fluid d-flex p-0">
      <div className="col bg-theme-1 min-vh-100 p-0" id="sideNavbar" style={{ flex: '0 0 225px', display: 'block' }} >
        <div className="position-fixed" style={{width: '225px'}}>
          <Navbar />
        </div>
      </div>
      <div className="col min-vh-100" style={{ background: '#F5F5F5' }}>
        <Topbar page={props.location.pathname}/>
        <Routes />
      </div>
    </div>
  )
}

export default Layout
