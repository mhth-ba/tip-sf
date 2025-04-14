import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Table, Badge, Alert } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'
import { fetchStavZariadeniRequest } from '../actions'

class StavZariadeni extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // Mapping of source type codes to display names
      sourceDisplayNames: {
        TpV: 'Tp Východ',
        TpZ: 'Tp Západ',
        VhJ: 'Vh Juh',
        CW: 'Cogen West',
        Slovnaft: 'VS Slovnaft',
        OLO: 'OLO',
        PPC: 'PPC'
      },
      // Define ordering of sources for display
      sourceOrder: ['TpZ', 'CW', 'TpV', 'PPC', 'VhJ', 'Slovnaft', 'OLO', 'PPC']
    }
  }

  componentDidMount() {
    this.fetchStavZariadeni()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Fetch data when the selected date in the calendar changes
    if (this.props.hlavny && prevProps.hlavny) {
      if (this.props.hlavny.ost_data && prevProps.hlavny.ost_data) {
        if (this.props.hlavny.ost_data.datum !== prevProps.hlavny.ost_data.datum) {
          this.fetchStavZariadeni()
        }
      }
    }
  }

  fetchStavZariadeni() {
    // Get the date from the hlavny ost_data
    if (this.props.hlavny && this.props.hlavny.ost_data && this.props.hlavny.ost_data.datum) {
      const date = moment.unix(this.props.hlavny.ost_data.datum).format('YYYY-MM-DD')
      this.props.fetchStavZariadeni(date)
    }
  }

  // Helper to render a status badge with appropriate color
  renderStatusBadge(stav) {
    if (!stav) return '-'

    let color = 'secondary'
    if (stav.toUpperCase().includes('PREVÁDZK')) {
      color = 'success'
    } else if (stav.toUpperCase().includes('ODSTÁVK')) {
      color = 'warning'
    } else if (stav.toUpperCase().includes('PORUCH') || stav.toUpperCase().includes('HAVÁR')) {
      color = 'danger'
    } else if (stav.toUpperCase().includes('ZÁLOH')) {
      color = 'info'
    }

    return <Badge color={color}>{stav}</Badge>
  }

  // Group devices by source and sort them
  getOrganizedDevices() {
    const { devices } = this.props
    const { sourceOrder } = this.state

    if (!devices || devices.length === 0) {
      return []
    }

    // Group by source
    const devicesBySource = {}
    devices.forEach(device => {
      if (!devicesBySource[device.source]) {
        devicesBySource[device.source] = []
      }
      devicesBySource[device.source].push(device)
    })

    // Create a structure for rendering
    let organizedDevices = []

    // Add sources in the desired order
    sourceOrder.forEach(sourceType => {
      if (devicesBySource[sourceType]) {
        // Sort devices within a source by name for consistency
        const sortedDevices = devicesBySource[sourceType].sort((a, b) => a.zariadenie.localeCompare(b.zariadenie))

        sortedDevices.forEach(device => {
          organizedDevices.push({
            source: sourceType,
            device: device
          })
        })
      }
    })

    return organizedDevices
  }

  render() {
    const { loading, error } = this.props
    const { sourceDisplayNames } = this.state

    const organizedDevices = this.getOrganizedDevices()

    // Determine if we have data for the current date
    const hasData = organizedDevices.length > 0

    // Format date for display in the header (from the selected day)
    const headerDate =
      this.props.hlavny && this.props.hlavny.ost_data && this.props.hlavny.ost_data.datum
        ? moment.unix(this.props.hlavny.ost_data.datum).format('DD.MM.YYYY')
        : 'Zvoleného dňa'

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Stav zariadení ({headerDate})</CardHeader>
        <CardBody>
          {loading && (
            <div className="text-center p-3">
              <p className="mt-2">Načítavam údaje o stave zariadení...</p>
            </div>
          )}

          {error && (
            <Alert color="danger">
              <FontAwesome name="exclamation-circle" /> Nastala chyba pri načítavaní stavu zariadení
            </Alert>
          )}

          {!loading && !error && !hasData && (
            <Alert color="info">
              <FontAwesome name="info-circle" /> Pre zvolený dátum nie sú k dispozícii žiadne údaje o stave zariadení
            </Alert>
          )}

          {!loading && !error && hasData && (
            <Table size="sm" bordered hover responsive>
              <thead className="thead-light">
                <tr>
                  <th>Zdroj</th>
                  <th>Zariadenie</th>
                  <th>Stav</th>
                </tr>
              </thead>
              <tbody>
                {organizedDevices.map((item, index) => {
                  const { source, device } = item
                  const isFirstInSource = index === 0 || organizedDevices[index - 1].source !== source

                  return (
                    <tr key={`${source}-${device.zariadenie}`}>
                      <td>{isFirstInSource ? sourceDisplayNames[source] || source : ''}</td>
                      <td>{device.zariadenie}</td>
                      <td>{this.renderStatusBadge(device.stav)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          )}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  devices: state.stavZariadeni.devices || [],
  loading: state.stavZariadeni.loading || false,
  error: state.stavZariadeni.error || null
})

const mapDispatchToProps = dispatch => ({
  fetchStavZariadeni: date => dispatch(fetchStavZariadeniRequest(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(StavZariadeni)
