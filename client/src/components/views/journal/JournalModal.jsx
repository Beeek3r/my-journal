import React, { useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'

const JournalModal = props => {
  const journalContext = useContext(JournalContext)
  const { journal, deleteJournalEntry, editJournalEntry } = journalContext

  const onDelete = () => {
    const alert = window.confirm('Are you sure you wish to delete this entry?')

    if (alert) {
      const $ = window.$

      deleteJournalEntry(journal._id)
      $('#journal-modal').modal('hide')
    }
  }

  const onEdit = () => {
    const $ = window.$

    editJournalEntry(props.journal)

    $('#journal-modal').modal('hide')

    props.history.push('/journal/edit')
  }

  return (
    <div className="modal fade" id="journal-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content text-muted">
          <div className="modal-header">
            {journal && ( // Jose recommended to change this way, change the rest later, and make it look less ugly)
              <h5 className="modal-title" id="exampleModalLabel">
                {journal.title}
              </h5>
            )}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{ whiteSpace: 'pre-wrap', minHeight: '200px', wordBreak: 'break-all' }}>
            {journal && journal.body}
          </div>
          <div className="modal-footer">
            {journal && <i className={journal.moodIcon} />}
            {journal && <i className={journal.favouriteIcon} />}
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" onClick={onEdit}>
              <i className="fas fa-pen fa-fw" /> Edit
            </button>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" onClick={onDelete}>
              <i className="fas fa-trash fa-fw" /> Delete
            </button>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" data-dismiss="modal">
              <i className="fas fa-window-close fa-fw" /> Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalModal
