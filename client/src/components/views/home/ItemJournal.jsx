import React, { useEffect, useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'

const ItemJournal = props => {
  const journalcontext = useContext(JournalContext)
  const { getJournalLog, journalLog, setJournalEntry } = journalcontext

  useEffect(() => {
    getJournalLog()
    // eslint-disable-next-line
  }, [])

  const onClick = (entry, mood, favourite) => {
    setJournalEntry(entry, mood, favourite)
    props.history.push('/journal')

    setTimeout(() => {
      window.$('#journal-modal').modal('show') // setTimeout is needed or modal won't open
    })
  }

  return (
    <div className=" col-lg-6 px-2 col-12 mb-3">
      <div className="col-12 py-4 px-3 shadow-sm bg-white rounded" style={{ minHeight: '320px' }}>
        <h5 className="text-muted text-center mb-4">Most Recent Journal Entries</h5>
        <div className="list-group">
          {journalLog ? (
            journalLog.slice(0, 5).map(entry => (
              <button
                key={entry._id}
                href="#"
                className="list-group-item list-group-item-action"
                onClick={() => {
                  onClick(entry, entry.mood, entry.favourite)
                }}>
                {entry.title}
                <span className="float-right">
                  <i className={`${entry.favourite ? 'fas' : 'far'} fa-star fa-fd text-warning`} />
                </span>
              </button>
            ))
          ) : (
            <div className="text-center my-3">
              <div className="spinner-border text-theme-7" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemJournal
