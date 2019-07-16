import React, { useContext, useEffect } from 'react'
import AuthContext from '../../../context/auth/authContext'
import Navbar from '../../../common/Navbar'
import Topbar from '../../../common/Topbar'
import JournalNewContent from './JournalNewContent'

const JournalNew = props => {
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  const styles = {
    sideNav: {
      flex: '0 0 225px',
      display: 'block'
    },
    sideNavFixed: {
      width: '225px'
    },
    contentColumn: {
      background: '#F5F5F5'
    }
  }

  return (
    <div className="container-fluid d-flex p-0">
      <div className="col bg-theme-1 min-vh-100 p-0" id="sideNavbar" style={styles.sideNav}>
        <div className="position-fixed" style={styles.sideNavFixed}>
          <Navbar />
        </div>
      </div>
      <div className="col min-vh-100" style={styles.contentColumn}>
        <Topbar page={props.location.pathname} />
        <JournalNewContent />
      </div>
    </div>
  )
}

export default JournalNew
