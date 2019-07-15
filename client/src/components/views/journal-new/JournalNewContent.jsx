import React, { useContext, useEffect, Fragment, useState } from 'react'
import JournalContext from '../../../context/journal/journalContext'
import NewJournalMessage from './NewJournalMessage'

const Home = props => {
  // Context
  const journalContext = useContext(JournalContext)
  const { saveNewJournalEntry, newJournalEntryMessage, setNewJournalMessage } = journalContext

  // State
  const [entry, setEntry] = useState({
    title: '',
    body: '',
    date: null,
    mood: 'neutral',
    favourite: false
  })

  const onChange = e => {
    console.log(e.target.name)
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    })
  }

  let favouriteIcon = 'far'
  const toggle = () => {
    let favorite = document.getElementById('favourite')
    if (favorite.className === 'fas fa-star fa-lg fa-fw text-warning mt-2') {
      favorite.className = 'far fa-star fa-lg fa-fw text-warning mt-2'
      setEntry({ ...entry, favourite: false })
    } else {
      favorite.className = 'fas fa-star fa-lg fa-fw text-warning mt-2'
      setEntry({ ...entry, favourite: true })
    }
  }

  const onSubmit = e => {
    e.preventDefault()

    if (entry.title == '') {
      setNewJournalMessage({ msg: 'Please enter a title for this entry.', type: 'danger' })
    } else {
      saveNewJournalEntry(entry)
    }
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
                <input type="text" className="form-control" name="title" placeholder="Title" onChange={onChange} required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="body" placeholder="Journal entry" onChange={onChange} style={styles.textarea} />
              </div>
              <div className="form-row ">
                <div className="form-group mx-1" style={styles.dateBox}>
                  <input type="date" className="form-control form-control-sm text-center" name="date" onChange={onChange} />
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
              {newJournalEntryMessage && <NewJournalMessage />}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
