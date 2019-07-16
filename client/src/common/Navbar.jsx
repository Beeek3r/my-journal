import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'
import JournalContext from '../context/journal/journalContext'
import logo from './logo.png'

const styles = {
  navLink: 'nav-link text-light w-100 p-2',
  navSubLink: 'nav-link text-light w-100 p-2'
}

const Navbar = () => {
  const authContext = useContext(AuthContext)
  const { logout } = authContext

  const journalContent = useContext(JournalContext)
  const { clearJournalLog } = journalContent

  const onLogout = () => {
    logout()
    clearJournalLog()
  }

  return (
    <Fragment>
      <div className="row mt-3 mb-4 pt-3">
        <img src={logo} className="m-auto d-block" alt="My Journal Logo" style={{ width: '160px', height: '32px' }} />
      </div>

      <hr style={{ borderBottom: '0.5px solid white', width: '87%' }} />

      <div className="row mt-3">
        <nav className="navbar navbar-dark flex-column text-left w-100 pl-5" style={{ fontSize: '14.5px' }}>
          <Link to="/" className={styles.navLink}>
            <i className="fas fa-home fa-fw mr-2" />
            <span>HOME</span>
          </Link>

          {/* Journal */}
          <Link to="#" className={styles.navLink} data-toggle="collapse" data-target="#collapseJournal" aria-expanded="true" aria-controls="collapseOne">
            <i className="fas fa-book fa-fw mr-2" />
            <span>JOURNAL</span>
          </Link>
          <div id="collapseJournal" className="collapse w-100 pl-4" aria-labelledby="headingOne" data-parent="#accordion">
            <Link to="/journal" className={styles.navSubLink} style={{ fontSize: '12px' }}>
              <i className="fas fa-book-open fa-fw mr-2" />
              <span>JOURNAL LOG</span>
            </Link>
            <Link to="/journal/new" className={styles.navSubLink} style={{ fontSize: '12px' }}>
              <i className="fas fa-pen-fancy fa-fw mr-2" />
              <span>NEW ENTRY</span>
            </Link>
          </div>
          {/* End of Journal*/}

          {/* Finance */}
          <Link to="#" className={styles.navLink} data-toggle="collapse" data-target="#collapseFinance" aria-expanded="true" aria-controls="collapseOne">
            <i className="fas fa-dollar-sign fa-fw mr-2" />
            <span>FINANCE</span>
          </Link>
          <div id="collapseFinance" className="collapse w-100 pl-4" aria-labelledby="headingOne" data-parent="#accordion">
            <Link to="/" className={styles.navSubLink} style={{ fontSize: '12px' }}>
              <i className="fas fa-credit-card fa-fw mr-2" />
              <span>INCOME STATEMENT</span>
            </Link>
            <Link to="/" className={styles.navSubLink} style={{ fontSize: '12px' }}>
              <i className="fas fa-coins fa-fw mr-2" />
              <span>BALANCE SHEET</span>
            </Link>
          </div>
          {/* End of Finance */}

          {/* Nutrition */}
          <Link to="#" className={styles.navLink} data-toggle="collapse" data-target="#collapseNutrition" aria-expanded="true" aria-controls="collapseOne">
            <i className="fas fa-hamburger fa-fw mr-2" />
            <span>NUTRITION</span>
          </Link>
          <div id="collapseNutrition" className="collapse w-100 pl-4" aria-labelledby="headingOne" data-parent="#accordion">
            <Link to="/" className={styles.navSubLink} style={{ fontSize: '12px' }}>
              <i className="fas fa-bread-slice fa-fw mr-2" />
              <span>FOOD DIARY</span>
            </Link>
            <Link to="/" className={styles.navSubLink} style={{ fontSize: '12px' }}>
              <i className="fas fa-hotdog fa-fw mr-2" />
              <span>SUMMARY</span>
            </Link>
          </div>
          {/* End of Nutrition */}

          {/* Exercise */}
          <Link to="#" className={styles.navLink} data-toggle="collapse" data-target="#collapseExercise" aria-expanded="true" aria-controls="collapseOne">
            <i className="fas fa-running fa-fw mr-2" />
            <span>EXERCISE</span>
          </Link>
          <div id="collapseExercise" className="collapse w-100 pl-4" aria-labelledby="headingOne" data-parent="#accordion">
            <Link to="/" className={styles.navSubLink} style={{ fontSize: '12px' }}>
              <i className="fas fa-dumbbell fa-fw mr-2" />
              <span>WORKOUTS</span>
            </Link>
            <Link to="/" className={styles.navSubLink} style={{ fontSize: '12px' }}>
              <i className="fas fa-hotdog fa-fw mr-2" />
              <span>SUMMARY</span>
            </Link>
          </div>
          {/* End of Exercise */}
        </nav>
      </div>

      <hr style={{ borderBottom: '0.5px solid white', width: '87%' }} />

      <div className="row mt-3">
        <nav className="navbar navbar-dark flex-column text-left w-100 pl-5" style={{ fontSize: '14.5px' }}>
          <Link to="/account" className={styles.navLink}>
            <i className="fas fa-user fa-fw mr-2" />
            <span>ACCOUNT</span>
          </Link>
          <Link to="/#" onClick={onLogout} className={styles.navLink}>
            <i className="fas fa-sign-out-alt fa-fw mr-2" />
            <span>LOGOUT</span>
          </Link>
        </nav>
      </div>
    </Fragment>
  )
}
export default Navbar
