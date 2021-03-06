import React, { useReducer } from 'react'
import JournalContext from './journalContext'
import journalReducer from './journalReducer'
import axios from 'axios'
import setAuthToken from '../../utilities/setAuthToken'
import { GET_JOURNAL_LOG, SET_JOURNAL_ENTRY, DELETE_JOURNAL_ENTRY_SUCCESS, SET_LOADING, REMOVE_MESSAGE, SAVE_NEW_JOURNAL_ENTRY_SUCCESS, CLEAR_NEW_JOURNAL_ENTRY, CLEAR_JOURNAL_LOG, EDIT_ENTRY, SAVE_JOURNAL_ENTRY_SUCCESS, EDIT_JOURNAL_ENTRY_SUCCESS, FILTER_JOURNAL, CLEAR_FILTER } from '../types'
import { withRouter } from 'react-router-dom'

const JournalState = props => {
  // Intial State
  const intialState = {
    journalLog: null,
    journal: null,
    loadingJournalLog: true,
    loadingJournalEntry: false,
    message: null,
    newJournalEntryMessage: null,
    filtered: null
  }

  // Reducer & State Destructuring
  const [state, dispatch] = useReducer(journalReducer, intialState)
  const { journalLog, journal, loadingJournalLog, loadingJournalEntry, message, newJournalEntryMessage, filtered } = state

  // Journal
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

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  // Save Journal Entry

  const saveNewJournalEntry = async entry => {
    if (entry.date === null) {
      delete entry.date
    }

    try {
      if (localStorage.token) setAuthToken(localStorage.getItem('token'))
      const res = await axios.post('/api/journals', entry)
      props.history.push('/journal')
      dispatch({ type: SAVE_JOURNAL_ENTRY_SUCCESS, payload: res.data })
      setLoading()
      getJournalLog()
    } catch (err) {
      console.log('Error saveNewJournEntry didnt work')
    }
  }

  const setNewJournalMessage = message => {
    dispatch({ type: SAVE_NEW_JOURNAL_ENTRY_SUCCESS, payload: message })
  }

  const clearNewJournalMessage = () => {
    dispatch({ type: CLEAR_NEW_JOURNAL_ENTRY })
  }

  const updateJournalEntry = async (entry, id) => {
    try {
      if (localStorage.token) setAuthToken(localStorage.getItem('token'))
      const res = await axios.put(`/api/journals/${id}`, entry)
      setLoading()

      if (res.data.msg === 'Successfully updated journal entry.') {
        props.history.push('/journal')
        dispatch({ type: EDIT_JOURNAL_ENTRY_SUCCESS, payload: res.data })
        setLoading()
        getJournalLog()
      }
    } catch (err) {}
  }

  // Viewing Journal Log In Modal

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

  const editJournalEntry = journal => {
    dispatch({ type: EDIT_ENTRY, payload: journal })
  }

  const filterJournal = text => {
    // // var replaceBackslashs = text.replace(/\\/g, '\\')
    // var replaceCarets = text.replace(/^/g, '\\')
    // var replaceBrackets = replaceCarets.replace(/\[/g, '\\')

    // console.log(replaceCarets)

    dispatch({ type: FILTER_JOURNAL, payload: text })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
    console.log('Im clearing')
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
        removeMessage,
        updateJournalEntry,
        clearNewJournalMessage,
        filtered,
        filterJournal,
        clearFilter
      }}>
      {props.children}
    </JournalContext.Provider>
  )
}

export default withRouter(JournalState)
