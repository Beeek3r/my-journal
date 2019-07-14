import React, { useContext, useEffect, Fragment, useState } from 'react'
// import JournalItem from './JournalItem'
// import AuthContext from '../../../context/auth/authContext'
import JournalContext from '../../../context/journal/journalContext'
// import JournalModal from './JournalModal'
import NewJournalMessage from './NewJournalMessage'

const JournalLogEdit = () => {
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

  return (
    <Fragment>
      <div className="row px-3 justify-content-center" style={{ marginTop: '67px' }}>
        <div className="col-12 col-lg-8 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded d-flex align-items-center">
            <form className="w-100" onSubmit={onSubmit}>
              <div class="form-group">
                <input type="text" class="form-control" name="title" placeholder="Title" onChange={onChange} />
              </div>
              <div class="form-group">
                <textarea class="form-control" name="body" placeholder="Journal entry" onChange={onChange} style={{height: '50vh'}} />
              </div>
              <div class="form-row ">
                <div class="form-group mx-1" style={{ width: '130px' }}>
                  <input type="date" class="form-control form-control-sm text-center" name="date" onChange={onChange} />
                </div>
                <div class="form-group mx-1" style={{ width: '100px' }}>
                  <select class="form-control form-control-sm" id="exampleFormControlSelect1" name="mood" onChange={onChange} value={entry.mood}>
                    <option value="neutral">Mood</option>
                    <option value="neutral">Neutral</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                  </select>
                </div>
                <div class="form-group mx-1">
                  <i id="favourite" className={`${favouriteIcon} fa-star fa-lg fa-fw text-warning mt-2`} onClick={toggle} />
                </div>
              </div>
              <button className="btn btn-theme-4 btn-sm text-muted" type="submit">
                <i class="fas fa-save fa-fw" /> Save
              </button>
              {newJournalEntryMessage && <NewJournalMessage />}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default JournalLogEdit
