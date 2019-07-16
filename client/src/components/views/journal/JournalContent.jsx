import React, { useContext, Fragment } from 'react'
import JournalItem from './JournalItem'
import JournalModal from './JournalModal'
import Message from './Message'
import JournalContext from '../../../context/journal/journalContext'

const JournalContent = props => {
  const journalContext = useContext(JournalContext)
  const { journalLog, loadingJournalLog, journal, message } = journalContext

  let journalEntries
  if (loadingJournalLog) {
    journalEntries = (
      <div className="spinner-grow text-theme-7" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only p-5">Loading...</span>
      </div>
    )
  } else if (journalLog && journalLog.length > 0) {
    journalEntries = journalLog.map(journal => <JournalItem journal={journal} key={journal._id} history={props.history} />)
  } else if (journalLog && journalLog.length === 0) {
    journalEntries = <h4 class="text-center mb-4 text-muted">Journal Log: 0 Entries</h4>
  }

  return (
    <Fragment>
      <div className="row px-3 justify-content-center" style={{ marginTop: '67px' }}>
        <div className="col-12 col-lg-8 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded d-flex align-items-center">
            <div className="w-100">
              <h4 className="text-center mb-4 text-muted">@Todo add some sort of filter or stats or some shit</h4>
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
            </div>
          </div>
        </div>
      </div>
      <div className="row px-3 justify-content-center">
        <div className="col-12 col-lg-8  mb-3 px-2 d-flex align-items-stretch" style={{ minHeight: '50vh' }}>
          <div className="col-12 px-5 py-4 shadow-sm bg-white rounded text-center">
            {message && !loadingJournalLog ? <Message /> : <Fragment />}

            {/* {// prettier-ignore
            loadingJournalLog ? 
              <div className="spinner-grow text-theme-7" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only p-5">Loading...</span>
              </div>
              : 
              journalLog.map(journal => (
                <JournalItem journal={journal} key={journal._id} />
              ))} */}
            {journalEntries}
          </div>

          <JournalModal journal={journal} history={props.history} />
        </div>
      </div>
    </Fragment>
  )
}

export default JournalContent
