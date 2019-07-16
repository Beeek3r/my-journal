import React, { useContext, useEffect } from 'react'
import AuthContext from '../../../context/auth/authContext'
import Navbar from '../../../common/Navbar'
import Topbar from '../../../common/Topbar'
import JournalNewContent from './JournalNewContent'

import JournalContext from '../../../context/journal/journalContext'

const JournalNew = props => {
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  const journalContext = useContext(JournalContext)
  const { newJournalEntryMessage } = journalContext

  useEffect(() => {
    loadUser()
    if (newJournalEntryMessage && newJournalEntryMessage.msg === 'Journal has been successfully saved.') {
      props.history.push('/journal') //Pushes back when message is stil up lmao fix that
    } // eslint-disable-next-line
  }, [newJournalEntryMessage, props.history])

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
