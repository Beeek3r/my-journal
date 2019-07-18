import React, { useContext, useEffect, Fragment } from 'react'
import JournalContent from './JournalContent'
import AuthContext from '../../../context/auth/authContext'
import JournalContext from '../../../context/journal/journalContext'
import Navbar from '../../../common/Navbar'
import Topbar from '../../../common/Topbar'

const Journal = props => {
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  const journalContext = useContext(JournalContext)
  const { getJournalLog, removeMessage, message } = journalContext

  useEffect(() => {
    loadUser().then(getJournalLog())

    if (message) removeMessage()
    

    // eslint-disable-next-line
  }, [props.history])

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
        <JournalContent history={props.history} />
      </div>
    </div>
  )
}

export default Journal
