import React, { useContext, Fragment } from 'react'

import JournalModal from './JournalModal'
import Message from './Message'
import JournalContext from '../../../context/journal/journalContext'
import Journals from './Journals'
import JournalFilter from './JournalFilter'

const JournalContent = props => {
  const journalContext = useContext(JournalContext)
  const { journalLog, loadingJournalLog, journal, message } = journalContext

  return (
    <Fragment>
      <div className="row px-3 justify-content-center" style={{ marginTop: '67px' }}>
        <div className="col-12 col-lg-8 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded d-flex align-items-center">
            <JournalFilter />
          </div>
        </div>
      </div>
      <div className="row px-3 justify-content-center">
        <div className="col-12 col-lg-8  mb-3 px-2 d-flex align-items-stretch" style={{ minHeight: '50vh' }}>
          <div className="col-12 px-5 py-4 shadow-sm bg-white rounded text-center">
            {message && !loadingJournalLog ? <Message /> : <Fragment />}
            {journalLog ? (
              <Journals history={props.history} />
            ) : (
              <div className="text-center my-3">
                <div className="spinner-border text-theme-7" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
          <JournalModal journal={journal} history={props.history} />
        </div>
      </div>
    </Fragment>
  )
}

export default JournalContent
