import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Table, Badge, Alert } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'
import { fetchAllZmenyNaZariadeniachRequest } from '../actions'

class ChronologicalTimeline extends React.Component {
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
        PPC: 'PPC',
        Zapad: 'HV Západ',
        Vychod: 'HV Východ'
      }
    }

    this.fetchTimelineData = this.fetchTimelineData.bind(this)
  }

  componentDidMount() {
    this.fetchTimelineData()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Fetch timeline data when the selected date changes
    if (this.props.hlavny && prevProps.hlavny) {
      if (this.props.hlavny.ost_data && prevProps.hlavny.ost_data) {
        if (this.props.hlavny.ost_data.datum !== prevProps.hlavny.ost_data.datum) {
          this.fetchTimelineData()
        }
      }
    }
  }

  fetchTimelineData() {
    if (this.props.hlavny && this.props.hlavny.ost_data && this.props.hlavny.ost_data.datum) {
      const date = moment.unix(this.props.hlavny.ost_data.datum).format('YYYY-MM-DD')
      this.props.fetchAllZmenyNaZariadeniach(date)
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

  // Get all entries from all sources and HVs, merge them, and sort by timestamp
  getAllEntries() {
    const { zmenaZdroje, zmenaHV } = this.props
    let allEntries = []

    // Add entries from all zdroj sources
    Object.entries(zmenaZdroje.entries).forEach(([sourceType, entries]) => {
      entries.forEach(entry => {
        if (entry.datum_cas) {
          allEntries.push({
            ...entry,
            sourceType,
            isHV: false
          })
        }
      })
    })

    // Add entries from HV sources
    Object.entries(zmenaHV.entries).forEach(([hvType, entries]) => {
      entries.forEach(entry => {
        if (entry.datum_cas) {
          allEntries.push({
            ...entry,
            sourceType: hvType,
            isHV: true
          })
        }
      })
    })

    // Sort by timestamp (most recent first)
    return allEntries.sort((a, b) => moment.unix(a.datum_cas).diff(moment.unix(b.datum_cas)))
  }

  render() {
    const { loading, error } = this.props
    const { sourceDisplayNames } = this.state

    const allEntries = this.getAllEntries()
    const hasData = allEntries.length > 0

    // Format date for display in the header (from the selected day)
    const headerDate =
      this.props.hlavny && this.props.hlavny.ost_data && this.props.hlavny.ost_data.datum
        ? moment.unix(this.props.hlavny.ost_data.datum).format('DD.MM.YYYY')
        : 'Zvoleného dňa'

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Chronologický prehľad ({headerDate})</CardHeader>
        <CardBody>
          {loading && (
            <div className="text-center p-3">
              <p className="mt-2">Načítavam údaje o chronologickom prehľade...</p>
            </div>
          )}

          {error && (
            <Alert color="danger">
              <FontAwesome name="exclamation-circle" /> Nastala chyba pri načítavaní údajov
            </Alert>
          )}

          {!loading && !error && !hasData && (
            <Alert color="info">
              <FontAwesome name="info-circle" /> Pre zvolený dátum nie sú žiadne zmeny stavov zariadení
            </Alert>
          )}

          {!loading && !error && hasData && (
            <Table size="sm" bordered hover responsive>
              <thead className="thead-light">
                <tr>
                  <th>Čas</th>
                  <th>Zdroj</th>
                  <th>Zariadenie</th>
                  <th>Stav</th>
                  <th>Poznámka</th>
                </tr>
              </thead>
              <tbody>
                {allEntries.map((entry, index) => (
                  <tr key={`${entry.sourceType}-${entry.id}-${index}`}>
                    <td>{entry.datum_cas ? moment.unix(entry.datum_cas).format('DD.MM.YYYY HH:mm') : '-'}</td>
                    <td>{sourceDisplayNames[entry.sourceType] || entry.sourceType}</td>
                    <td>{entry.isHV ? 'Horúcovod' : entry.zariadenie || '-'}</td>
                    <td>{entry.isHV ? '-' : this.renderStatusBadge(entry.stav)}</td>
                    <td style={{ whiteSpace: 'pre-line' }}>{entry.poznamka || '-'}</td>
                  </tr>
                ))}
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
  zmenaZdroje: state.zmenaZdroje,
  zmenaHV: state.zmenaHV,
  loading: state.zmenaZdroje.loading || state.zmenaHV.loading,
  error: state.zmenaZdroje.error || state.zmenaHV.error
})

const mapDispatchToProps = dispatch => ({
  fetchAllZmenyNaZariadeniach: date => dispatch(fetchAllZmenyNaZariadeniachRequest(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChronologicalTimeline)
