import React, { useContext, useEffect, Fragment } from 'react'
import JournalItem from './JournalItem'
import AuthContext from '../../../context/auth/authContext'
import JournalContext from '../../../context/journal/journalContext'
import JournalModal from './JournalModal'
import Message from './Message'

const Journal = () => {
  // Context
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  const journalContext = useContext(JournalContext)
  const { getJournalLog, journalLog, loadingJournalLog, journal, message } = journalContext

  useEffect(() => {
    loadUser().then(getJournalLog()) // Possible Crash ?? Trying access without token
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <div className="row px-3 justify-content-center" style={{ marginTop: '67px' }}>
        <div className="col-12 col-lg-8 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded d-flex align-items-center">
            <div className="w-100">
              <h4 className="text-center mb-4 text-muted">@Todo add some sort of filter or stats or some shit</h4>
              {/* Start of the mini row  */}
              <div className="row">
                <div className="col-12 col-md-5">
                  <div className="progress mt-1" style={{ height: '1rem' }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-theme-7 p-3" role="progressbar" style={{ width: '71%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="31" />
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <div className="progress mt-1" style={{ height: '1rem' }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-theme-7 p-3" role="progressbar" style={{ width: '71%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="31" />
                  </div>
                </div>
              </div>
              {/* End of the mini row  */}
            </div>
          </div>
        </div>
      </div>
      <div className="row px-3 justify-content-center">
        <div className="col-12 col-lg-8  mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 px-5 py-4 shadow-sm bg-white rounded text-center">
            {message && !loadingJournalLog ? <Message /> : <Fragment />}

            {// prettier-ignore
            loadingJournalLog ? 
              <div className="spinner-grow text-theme-7" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only p-5">Loading...</span>
              </div>
              : 
              journalLog.map(journal => (
                <JournalItem journal={journal} key={journal._id} />
              ))}
          </div>

          <JournalModal journal={journal} />
          {/* Clean up the way you do the modal, do some checks instead of ternary */}
        </div>
      </div>
    </Fragment>
  )
}


		


export default Journal
