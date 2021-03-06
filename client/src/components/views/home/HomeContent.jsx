import React, { Fragment } from 'react'
import ItemJournal from './ItemJournal'
import Item1 from './Item1'
import Item2 from './Item2'

const HomeContent = props => {
  return (
    <Fragment>
      {/* Start of Row 1 */}
      <div className="row px-3 justify-content-between" style={{ marginTop: '67px' }}>
        <ItemJournal history={props.history} />
        <Item1 />
        <Item2 />
      </div>
      {/* End of Row 1 */}

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
      {/* End of Content */}
    </Fragment>
  )
}

export default HomeContent
