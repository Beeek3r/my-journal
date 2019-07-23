import React, { useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'

const Message = () => {
  const journalContext = useContext(JournalContext)
  const { newJournalEntryMessage, clearNewJournalMessage } = journalContext

  return (
    <div className="form-group mt-3 text-center">
      <div className={`alert alert-${newJournalEntryMessage.type} p-1 px-2 w-100`} role="alert" style={{ fontSize: '0.9rem' }}>
        {newJournalEntryMessage.msg}
        <span className="float-right errorButtonClose" onClick={clearNewJournalMessage}>
          <i className="fas fa-times-circle fa-fw" />
        </span>
      </div>
    </div>
  )
}

export default Message
