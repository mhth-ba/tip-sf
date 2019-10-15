import React from 'react'

class Jednotka extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <span className="text-muted small">
        [{ this.props.unit }]
      </span>
    )
  }
}

export default Jednotka