import React, { useContext, useEffect, Fragment } from 'react'
import Navbar from './Navbar'
import Topbar from './Topbar'
import JournalContent from './JournalContent'
import AuthContext from '../../../context/auth/authContext'
import JournalContext from '../../../context/journal/journalContext'

const Journal = props => {
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  const journalContext = useContext(JournalContext)
  const { getJournalLog } = journalContext

  useEffect(() => {
    loadUser().then(getJournalLog())
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
        <JournalContent />
      </div>
    </div>
  )
}

export default Journal
