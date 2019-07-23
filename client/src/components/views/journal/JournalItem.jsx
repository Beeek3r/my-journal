import React, { Fragment, useContext } from 'react'
import JournalContext from '../../../context/journal/journalContext'
import moment from 'moment'

const JournalItem = props => {
  // Props
  const { body, title, mood, favourite, _id } = props.journal
  const date = moment(props.journal.date).format('DD/MM/YYYY')

  // Context
  const journalContext = useContext(JournalContext)
  const { setJournalEntry, deleteJournalEntry, editJournalEntry } = journalContext

  // Methods
  const getJournalEntry = () => {
    setJournalEntry(props.journal, moodIcon, favouriteIcon)
  }

  const onEdit = () => {
    editJournalEntry(props.journal)
    props.history.push('/journal/edit')
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
    alert && deleteJournalEntry(_id)
  }

  // Maximum 350 characters displayed on Journal Log
  let displayBody
  body.length > 300 ? (displayBody = `${body.slice(0, 300)}...`) : (displayBody = body)

  // Styling
  const styles = {
    button: { fontSize: '0.8rem' },
    date: { fontSize: '0.85rem' }
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
                <span className="font-weight-normal" style={styles.date}>
                  {date}
                </span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text text-muted text-left mb-4" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              {displayBody}
            </p>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" onClick={confirm} style={styles.button}>
              <i className="fas fa-trash fa-fw" /> Delete
            </button>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" onClick={onEdit} style={styles.button}>
              <i className="fas fa-pen fa-fw" /> Edit
            </button>
            <button className="btn float-right mx-1 btn-theme-4 btn-sm text-muted" onClick={getJournalEntry} data-toggle="modal" data-target="#journal-modal" style={styles.button}>
              <i className="fas fa-eye fa-fw" /> View
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default JournalItem
