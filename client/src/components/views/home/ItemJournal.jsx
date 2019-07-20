import React, { useEffect, useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'

const ItemJournal = () => {
  const journalcontext = useContext(JournalContext)
  const { getJournalLog, journalLog } = journalcontext

  useEffect(() => {
    getJournalLog()

    // eslint-disable-next-line
  }, [])

  return (
    <div className=" col-lg-6 px-2 col-12 mb-3">
      <div className="col-12 py-4 px-3 shadow-sm bg-white rounded" style={{ minHeight: '320px' }}>
        <h5 className="text-muted text-center mb-4">Most Recent Journal Entries</h5>
        <div className="list-group">
          {journalLog ? (
            journalLog.slice(0, 5).map(entry => (
              <a href="#" className="list-group-item list-group-item-action">
                {entry.title}
                <span className="float-right">
                  <i className={`${entry.favourite ? 'fas' : 'far'} fa-star fa-fd text-warning`} />
                </span>
              </a>
            ))
          ) : (
            <div className="text-center my-3">
              <div class="spinner-border text-theme-7" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemJournal
