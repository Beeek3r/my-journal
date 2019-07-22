import React, { useContext, useRef, useEffect } from 'react'
import JournalContext from '../../../context/journal/journalContext'

const JournalFilter = () => {
  const journalContext = useContext(JournalContext)
  const text = useRef('')

  useEffect(() => {
    if (journalContext.filtered !== null) {
      text.current.value = ''
    } else {
    }
    // eslint-disable-next-line
  }, [])

  const onChange = e => {
    if (text.current.value !== '') {
      journalContext.filterJournal(e.target.value)
    } else {
      journalContext.clearFilter()
    }
  }

  return (
    <form className="w-100">
      <div className="form-group px-3 mb-0">
        <input type="text" ref={text} className="form-control" placeholder="Filter Entries" onChange={onChange} />
      </div>
    </form>
  )
}

export default JournalFilter
