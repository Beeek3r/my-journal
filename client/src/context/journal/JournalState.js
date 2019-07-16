import React, { useReducer } from 'react'
import JournalContext from './journalContext'
import journalReducer from './journalReducer'
import axios from 'axios'
import setAuthToken from '../../utilities/setAuthToken'
import { GET_JOURNAL_LOG, SET_JOURNAL_ENTRY, DELETE_JOURNAL_ENTRY_SUCCESS, SET_LOADING, REMOVE_MESSAGE, SAVE_NEW_JOURNAL_ENTRY_SUCCESS, CLEAR_NEW_JOURNAL_ENTRY_SUCCESS, CLEAR_JOURNAL_LOG, EDIT_ENTRY, SAVE_JOURNAL_ENTRY_SUCCESS } from '../types'

const JournalState = props => {
  // State
  const intialState = {
    journalLog: null,
    journal: null,
    loadingJournalLog: true,
    loadingJournalEntry: false,
    message: null,
    newJournalEntryMessage: null
  }

  const [state, dispatch] = useReducer(journalReducer, intialState)
  const { journalLog, journal, loadingJournalLog, loadingJournalEntry, message, newJournalEntryMessage } = state

  // Methods
  const getJournalLog = async () => {
    try {
      if (localStorage.token) setAuthToken(localStorage.getItem('token'))
      const res = await axios.get('/api/journals')
      dispatch({ type: GET_JOURNAL_LOG, payload: res.data.journals })
    } catch (err) {
      console.log(err.message)
      // Todo
    }
  }

  const clearJournalLog = () => {
    dispatch({ type: CLEAR_JOURNAL_LOG })
  }

  const saveNewJournalEntry = async entry => {
    if (entry.date === null) {
      delete entry.date
    }

    try {
      if (localStorage.token) setAuthToken(localStorage.getItem('token'))
      const res = await axios.post('/api/journals', entry)
      dispatch({ type: SAVE_JOURNAL_ENTRY_SUCCESS, payload: res.data })
      setLoading()
      getJournalLog()
    } catch (err) {
      console.log(err.message.data)
    }
  }

  const setNewJournalMessage = message => {
    dispatch({ type: SAVE_NEW_JOURNAL_ENTRY_SUCCESS, payload: message })
    // setTimeout(() => {
    //   clearNewJournalMessage()
    // }, 2000)
  }

  const clearNewJournalMessage = () => {
    dispatch({ type: CLEAR_NEW_JOURNAL_ENTRY_SUCCESS })
  }

  const setJournalEntry = (journal, moodIcon, favouriteIcon) => {
    dispatch({ type: SET_JOURNAL_ENTRY, payload: journal })
    journal.moodIcon = moodIcon
    journal.favouriteIcon = favouriteIcon
  }

  const deleteJournalEntry = async id => {
    try {
      if (localStorage.token) setAuthToken(localStorage.getItem('token'))
      const res = await axios.delete(`/api/journals/${id}`)
      dispatch({ type: DELETE_JOURNAL_ENTRY_SUCCESS, payload: res.data })
      setLoading()
      getJournalLog()
    } catch (err) {
      console.log(err) // GOtta Double Check this stuf fhere my man
    }
  }

  const removeMessage = () => {
    dispatch({ type: REMOVE_MESSAGE })
  }

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  const editJournalEntry = journal => {
    dispatch({ type: EDIT_ENTRY, payload: journal })
  }

  return (
    <JournalContext.Provider
      value={{
        journalLog: journalLog,
        journal: journal,
        getJournalLog,
        saveNewJournalEntry,
        loadingJournalLog: loadingJournalLog,
        setJournalEntry,
        loadingJournalEntry: loadingJournalEntry,
        deleteJournalEntry,
        message: message,
        newJournalEntryMessage,
        setNewJournalMessage,
        clearJournalLog,
        editJournalEntry,
        removeMessage
      }}>
      {props.children}
    </JournalContext.Provider>
  )
}

export default JournalState
