import React, { useContext, useEffect, Fragment } from 'react'
import AuthContext from '../../../context/auth/authContext'

const Home = () => {
  // Context
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <div className="row px-3 justify-content-between" style={{marginTop: '67px'}}>
        <div className="col-lg-3 col-12 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded d-flex align-items-center">
            <div className="w-100">
              <h5 className="text-muted text-center mb-4">Monthly Journal Entries: 22</h5>
              <div className="progress mt-1" style={{ height: '2rem' }}>
                <div className="progress-bar progress-bar-striped bg-theme-7 p-3" role="progressbar" style={{ width: '71%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="31" />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-3 col-12 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded d-flex align-items-center">
            <div className="w-100">
              <h5 className="text-muted text-center mb-4">Nutrition Diary Streak: 22</h5>
              <div className="progress mt-1" style={{ height: '2rem' }}>
                <div className="progress-bar progress-bar-striped bg-theme-7 p-3" role="progressbar" style={{ width: '71%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="31" />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-6 px-2 col-12 mb-3">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded">
            <h5 className="text-muted text-center mb-4">Most Recent Journal Entries</h5>
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action">
                OSRS DMM Tournment
                <span className="float-right">
                  <i className="fas fa-smile-beam fa-fd text-success" />
                </span>
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                NBA Finals
                <span className="float-right">
                  <i className="fas fa-angry fa-fd  text-muted" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row px-3 justify-content-between ">
        <div className="col-lg-4 col-12 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px- shadow-sm bg-white rounded d-flex align-items-center">
            <div className="w-100">
              <h5 className="text-muted text-center mb-4">Nutrition Diary Streak: 22</h5>
              <div className="progress mt-1" style={{ height: '2rem' }}>
                <div className="progress-bar progress-bar-striped bg-theme-7 p-3" role="progressbar" style={{ width: '71%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="31" />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-8 col-12 mb-3 px-2 d-flex align-items-stretch">
          <div className="col-12 py-4 px-3 shadow-sm bg-white rounded d-flex align-items-center">
            <div className="w-100">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">@TODO LATER MAYBE EXPENSE</th>
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>DUMMY DATA</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td />
                    <td> </td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
