import React, { useContext, useState, useEffect, Fragment } from 'react'
import JournalItem from './JournalItem'
import JournalContext from '../../../context/journal/journalContext'
import Pagination from './Pagination'

const Journals = props => {
  const journalContext = useContext(JournalContext)
  const { journalLog, filtered } = journalContext

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    // eslint-disable-next-line
  }, [])

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = journalLog.slice(indexOfFirstPost, indexOfLastPost)

  // Change the page
  const paginate = pagenumber => {
    setCurrentPage(pagenumber)
  }

  if (journalLog.length > 0) {
    return (
      <Fragment>
        {filtered ? filtered.map(journal => <JournalItem journal={journal} key={journal._id} history={props.history} />) : currentPosts.map(journal => <JournalItem journal={journal} key={journal._id} history={props.history} />)}
        <Pagination postsPerPage={postsPerPage} totalPosts={journalLog.length} paginate={paginate} />
      </Fragment>
    )
  } else {
    return <h4 class="text-center mb-4 text-muted">Journal Log: 0 Entries</h4>
  }
}

export default Journals
