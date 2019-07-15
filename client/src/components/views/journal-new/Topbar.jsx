import React, { Fragment } from 'react'

const Topbar = props => {
  // Toggle Side Navbar
  const toggleSide = () => {
    let display = document.getElementById('sideNavbar').style.display
    if (display === 'block') {
      document.getElementById('sideNavbar').style.display = 'none'
    } else {
      document.getElementById('sideNavbar').style.display = 'block'
    }
  }

  // Topbar Title
  let title

  console.log(props.page)
  switch (props.page) {
    case '/':
      title = 'Dashboard'
      break

    case '/journal':
      title = 'Journal Log'
      break

    case '/journal/new':
      title = 'New Entry'
      break

    default:
      title = 'Not working yo'
  }
  console.log('here')

  return (
    <Fragment>
      <div className="row">
        <div className=" col-12 p-0 position-fixed" style={{ zIndex: 10 }}>
          <div className="shadow-sm bg-white rounded text-muted">
            <h5 id="topbarTitle">
              <i id="sideToggler" className="fas fa-bars fa-lg mr-1 ml-1 p-3" onClick={toggleSide} />
              {title}
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Topbar
