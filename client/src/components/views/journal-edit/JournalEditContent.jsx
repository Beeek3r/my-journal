import React, { useContext, useEffect, Fragment, useState } from 'react'
import JournalContext from '../../../context/journal/journalContext'
import moment from 'moment'

const JournalEditContent = props => {
  const journalContext = useContext(JournalContext)
  const { journal, updateJournalEntry } = journalContext

  useEffect(() => {
    if (journal) {
      setEntry({
        ...entry,
        title: journal.title,
        body: journal.body,
        date: moment(journal.date).format('YYYY-MM-DD'),
        mood: journal.mood,
        favourite: journal.favourite
      })
    }
    // eslint-disable-next-line
  }, [journal])

  // State
  const [entry, setEntry] = useState({
    title: '',
    body: '',
    date: '',
    mood: 'neutral',
    favourite: false
  })

  const onChange = e => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    })
  }

  let favouriteIcon
  if (entry.favourite) {
    favouriteIcon = 'fas fa-star fa-lg fa-fw text-warning mt-2'
  } else {
    favouriteIcon = 'far fa-star fa-lg fa-fw text-warning mt-2'
  }

  const toggle = () => {
    setEntry({
      ...entry,
      favourite: !entry.favourite
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    // console.log('need to add functionality')
    // props.history.push('/journal')
    updateJournalEntry(entry, journal._id)
  }

  const styles = {
    textarea: {
      height: '50vh'
    },
    topRow: {
      marginTop: '67px'
    },
    dateBox: {
      width: '130px'
    },
    moodBox: {
      width: '100px'
    }
  }

  return (
    <Fragment>
      <div className="row px-3 justify-content-center" style={styles.topRow}>
        <div className="col-12 col-lg-8 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded d-flex align-items-center">
            <form className="w-100" onSubmit={onSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" name="title" placeholder="Title" onChange={onChange} value={entry.title} required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="body" placeholder="Journal entry" onChange={onChange} value={entry.body} style={styles.textarea} />
              </div>
              <div className="form-row ">
                <div className="form-group mx-1" style={styles.dateBox}>
                  <input type="date" id="date" className="form-control form-control-sm text-center" name="date" onChange={onChange} value={entry.date} />
                </div>
                <div className="form-group mx-1" style={styles.moodBox}>
                  <select className="form-control form-control-sm" name="mood" onChange={onChange} value={entry.mood}>
                    <option value="neutral">Mood</option>
                    <option value="neutral">Neutral</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                  </select>
                </div>
                <div className="form-group mx-1">
                  <i id="favourite" className={`${favouriteIcon} fa-star fa-lg fa-fw text-warning mt-2`} onClick={toggle} />
                </div>
              </div>
              <button className="btn btn-theme-4 btn-sm text-muted" type="submit">
                <i className="fas fa-save fa-fw" /> Save
              </button>
              {/* {newJournalEntryMessage && <NewJournalMessage />} */}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default JournalEditContent
