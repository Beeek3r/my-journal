import { GET_JOURNAL_LOG, GET_JOURNAL, CLEAR_JOURNAL, SET_JOURNAL_ENTRY, DELETE_JOURNAL_ENTRY_SUCCESS, SET_LOADING, REMOVE_MESSAGE, SAVE_NEW_JOURNAL_ENTRY_SUCCESS, CLEAR_NEW_JOURNAL_ENTRY, CLEAR_JOURNAL_LOG, EDIT_ENTRY, SAVE_JOURNAL_ENTRY_SUCCESS, EDIT_JOURNAL_ENTRY_SUCCESS, FILTER_JOURNAL, CLEAR_FILTER } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_JOURNAL_LOG:
      return {
        ...state,
        journalLog: action.payload,
        loadingJournalLog: false
      }

    case CLEAR_JOURNAL_LOG:
      return {
        ...state,
        journalLog: null
      }

    case GET_JOURNAL:
      return {
        ...state
      }

    case CLEAR_JOURNAL:
      return {
        ...state
      }

    case SET_JOURNAL_ENTRY:
      return {
        ...state,
        journal: action.payload
      }

    case EDIT_ENTRY:
      return {
        ...state,
        journal: action.payload
      }

    case DELETE_JOURNAL_ENTRY_SUCCESS:
    case SAVE_JOURNAL_ENTRY_SUCCESS:
    case EDIT_JOURNAL_ENTRY_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loadingJournalLog: false
      }

    case SAVE_NEW_JOURNAL_ENTRY_SUCCESS:
      return {
        ...state,
        newJournalEntryMessage: action.payload
      }

    case CLEAR_NEW_JOURNAL_ENTRY:
      return {
        ...state,
        newJournalEntryMessage: null
      }

    case REMOVE_MESSAGE:
      return {
        ...state,
        message: null
      }

    case SET_LOADING:
      return {
        ...state,
        loadingJournalLog: true
      }

    case FILTER_JOURNAL:
      return {
        ...state,
        filtered: state.journalLog.filter(journal => {
          return journal.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 || journal.body.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
        })
      }

    case CLEAR_FILTER:
      console.log('Im making it null')
      return {
        ...state,
        filtered: null
      }

    default:
      return {
        ...state
      }
  }
}
