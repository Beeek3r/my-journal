import React, { useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'

const JournalModal = () => {
  const journalContext = useContext(JournalContext)
  const { journal } = journalContext

  // Confirm Deleteing A Journal Entry
  const confirm = () => {
    const alert = window.confirm('Are you sure you wish to delete this entry?')
    alert ? console.log('Delete entry') : console.log('Do not delete entry')
  }

  return (
    <div class="modal fade" id="journal-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content text-muted">
          <div class="modal-header">
            {journal && ( // Jose recommended to change this way, change the rest later, and make it look less ugly)
              <h5 class="modal-title" id="exampleModalLabel">
                {journal.title}
              </h5>
            )}
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style={{ whiteSpace: 'pre-wrap', minHeight: '200px' }}>
            {journal && journal.body}
          </div>
          <div class="modal-footer">
            {journal && <i class={journal.moodIcon} />}
            {journal && <i class={journal.favouriteIcon} />}
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted">
              <i class="fas fa-pen fa-fw" /> Edit
            </button>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" onClick={confirm}>
              <i class="fas fa-trash fa-fw" /> Delete
            </button>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" data-dismiss="modal">
              <i class="fas fa-window-close fa-fw" /> Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalModal
