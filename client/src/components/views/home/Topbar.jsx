import React, { Fragment } from 'react'

const Topbar = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 p-0 ">
          <div className="shadow-sm bg-white rounded">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white">
                <li style={{ color: '#2ad5ca' }} className="breadcrumb-item">
                  Dashboard
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Topbar
