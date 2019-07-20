import React from 'react'

const Item1 = () => {
  return (
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
  )
}

export default Item1
