import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const styles = {
    pagination: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    item: {
      minWidth: '43px'
    }
  }

  return (
    <nav className="w-100">
      <ul className="pagination" style={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className="page-item" style={styles.item}>
            <a
              onClick={() => {
                paginate(number)
              }}
              href="#"
              className="page-link text-muted">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
