import React, { useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'

const Message = () => {
  const journalContext = useContext(JournalContext)
  const { removeMessage, message } = journalContext

  return (
    <div className="row">
      <div className="alert alert-success p-1 mb-4 px-2 w-100" role="alert" style={{ fontSize: '0.9rem' }}>
        {message.msg}
        <span className="float-right errorButtonClose" onClick={removeMessage}>
          <i class="fas fa-times-circle fa-fw" />
        </span>
      </div>
    </div>
  )
}

export default Message
