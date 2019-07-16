import React, { useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'

const Message = () => {
  const journalContext = useContext(JournalContext)
  const { newJournalEntryMessage } = journalContext

  return (
    <div className="form-group mt-3 text-center">
      <div className={`alert alert-${newJournalEntryMessage.type} p-1 px-2 w-100`} role="alert" style={{ fontSize: '0.9rem' }}>
        <i class="fas fa-check fa-fw" /> {}
        {newJournalEntryMessage.msg}
      </div>
    </div>
  )
}

export default Message
