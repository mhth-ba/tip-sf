import React from 'react'

class ZlomkovaCiara extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const width = this.props.width

    const style = {
      width: `${width}%`
    }

    return (
      <div className="zlomkova-ciara-wrapper">
        <div className="zlomkova-ciara" style={style}>{''}</div>
      </div>
    )
  }
}

export default ZlomkovaCiara