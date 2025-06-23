import React from 'react'
import { connect } from 'react-redux'
import { setViewMode } from '../actions'

const ViewModeToggle = ({ mode, setViewMode, disabled }) => {
  return (
    <div className="btn-group" role="group" aria-label="View mode">
      <button
        type="button"
        className={`btn btn-sm ${mode === 'calendar' ? 'btn-primary' : 'btn-default'}`}
        onClick={() => setViewMode('calendar')}
        disabled={disabled}
      >
        <i className="fa fa-calendar" /> Kalendár
      </button>
      <button
        type="button"
        className={`btn btn-sm ${mode === 'filter' ? 'btn-primary' : 'btn-default'}`}
        onClick={() => setViewMode('filter')}
        disabled={disabled}
      >
        <i className="fa fa-filter" /> Filter
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  mode: state.filterView.mode
})

const mapDispatchToProps = {
  setViewMode
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewModeToggle)