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
            {/* <div className="w-100">
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
            </div> */}
            <JournalFilter />
            {/* todo later, make sure you dont filter while it is loading or it crashes */}
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
                <div class="spinner-border text-theme-7" role="status">
                  <span class="sr-only">Loading...</span>
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
