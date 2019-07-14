import React, { Fragment, useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'
import moment from 'moment'

const JournalItem = props => {
  // Props
  const { body, title, mood, favourite, _id } = props.journal
  const date = moment(props.journal.date).format('DD/MM/YYYY')

  // Context
  const journalContext = useContext(JournalContext)
  const { setJournalEntry, deleteJournalEntry } = journalContext

  // Methods
  const getJournalEntry = () => {
    setJournalEntry(props.journal, moodIcon, favouriteIcon)
  }

  let moodIcon
  switch (mood) {
    case 'angry':
      moodIcon = 'fas fa-angry  text-secondary mr-1'
      break
    case 'happy':
      moodIcon = 'fas fa-smile text-secondary mr-1'
      break
    case 'sad':
      moodIcon = 'fas fa-sad-tear text-secondary mr-1'
      break
    default:
      moodIcon = 'fas fa-meh text-secondary mr-1'
  }

  let favouriteIcon
  favourite ? (favouriteIcon = 'fas fa-star fa-fw text-warning mr-1') : (favouriteIcon = 'far fa-star fa-fw text-warning mr-1')

  const confirm = () => {
    const alert = window.confirm('Are you sure you wish to delete this entry?')
    if (alert) {
      deleteJournalEntry(_id)
    } else {
      console.log('Not deleting item')
    }
  }

  return (
    <Fragment>
      <div className="row mb-4" style={{ minHeight: '150px' }}>
        <div className="card w-100">
          <div className="card-header text-muted font-weight-bold">
            <div className="row">
              <div className="col-12 col-md-9 text-center text-md-left mb-1"> {title}</div>
              <div className="col-12 col-md-3 text-center text-md-right">
                <i className={moodIcon} />
                <i className={favouriteIcon} />
                <span className="font-weight-normal">{date}</span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text text-muted text-left mb-4" style={{ whiteSpace: 'pre-wrap' }}>
              {body.length > 250 ? `${body.slice(0, 250)}...` : body}
            </p>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" onClick={confirm}>
              <i class="fas fa-trash fa-fw" /> Delete
            </button>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted">
              <i class="fas fa-pen fa-fw" /> Edit
            </button>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" data-toggle="modal" onClick={getJournalEntry} data-target="#journal-modal">
              <i class="fas fa-eye fa-fw" /> View
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default JournalItem
