import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Table, Alert, Badge, Row, Col } from 'reactstrap'
import moment from 'moment'

// Helper function to format dates consistently
const formatDate = dateValue => {
  if (!dateValue) return '-'

  // Try different date parsing approaches
  let date

  // If it's already a moment object
  if (moment.isMoment(dateValue)) {
    date = dateValue
  }
  // If it's an object with timestamp property (Doctrine DateTime object)
  else if (typeof dateValue === 'object' && dateValue.timestamp) {
    date = moment.unix(dateValue.timestamp)
  }
  // If it's a number (Unix timestamp in seconds)
  else if (typeof dateValue === 'number') {
    // Check if it's a reasonable Unix timestamp (not too large or small)
    if (dateValue > 946684800 && dateValue < 4102444800) {
      // Between 2000 and 2100
      date = moment.unix(dateValue)
    } else {
      // Might be milliseconds timestamp
      date = moment(dateValue)
    }
  }
  // If it's a string, try parsing it
  else if (typeof dateValue === 'string') {
    // Check if it's a SQL datetime string (YYYY-MM-DD HH:mm:ss)
    if (/^\d{4}-\d{2}-\d{2}/.test(dateValue)) {
      // Handle SQL Server datetime format with milliseconds
      date = moment(dateValue.replace(/\.000$/, ''), 'YYYY-MM-DD HH:mm:ss')
    } else {
      date = moment(dateValue)
    }
  }
  // If it's an object with date properties (SQL datetime object)
  else if (typeof dateValue === 'object' && dateValue.date) {
    date = moment(dateValue.date)
  } else {
    // Try direct moment parsing
    date = moment(dateValue)
  }

  // Return formatted date if valid, otherwise return dash
  if (date && date.isValid()) {
    return date.format('DD.MM.YYYY HH:mm')
  }

  return '-'
}

const FilterResults = ({ results, isLoading, error }) => {
  const { zdroje = [], horucovod = [] } = results || {}

  // Sort data by datum_cas descending
  const sortByDateDesc = data => {
    return [...data].sort((a, b) => {
      const dateA = a.datum_cas ? moment(a.datum_cas).valueOf() : 0
      const dateB = b.datum_cas ? moment(b.datum_cas).valueOf() : 0
      return dateB - dateA // Descending order
    })
  }

  const sortedZdroje = sortByDateDesc(zdroje)
  const sortedHorucovod = sortByDateDesc(horucovod)

  if (error) {
    return (
      <Alert color="danger">
        <i className="fa fa-exclamation-triangle mr-2" />
        Chyba pri načítavaní údajov: {error.message || 'Neznáma chyba'}
      </Alert>
    )
  }

  if (isLoading) {
    return (
      <Card>
        <CardBody className="text-center">
          <i className="fa fa-spinner fa-spin fa-2x text-primary" />
          <p className="mt-3">Načítavanie údajov...</p>
        </CardBody>
      </Card>
    )
  }

  const totalResults = sortedZdroje.length + sortedHorucovod.length

  if (totalResults === 0) {
    return (
      <Alert color="info">
        <i className="fa fa-info-circle mr-2" />
        Neboli nájdené žiadne záznamy zodpovedajúce zadaným filtrom.
      </Alert>
    )
  }

  const renderZdrojeTable = (title, data) => {
    if (data.length === 0) return null

    return (
      <Card className="mb-4">
        <CardHeader>
          <h5 className="mb-0">
            <i className="fa fa-cogs mr-2" />
            {title}
            <Badge color="secondary" className="ml-2">
              {data.length}
            </Badge>
          </h5>
        </CardHeader>
        <CardBody>
          <div className="table-responsive">
            <Table striped hover size="sm">
              <thead>
                <tr>
                  <th>Dátum/čas</th>
                  <th>Zdroj</th>
                  <th>Zariadenie</th>
                  <th>Stav</th>
                  <th>Poznámka</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={`zdroje-${row.zdroj}-${row.id}-${index}`}>
                    <td>{formatDate(row.datum_cas)}</td>
                    <td>{row.zdroj || '-'}</td>
                    <td>{row.zariadenie || '-'}</td>
                    <td>
                      {row.stav === 'V prevádzke' && <Badge color="success">V prevádzke</Badge>}
                      {row.stav === 'V odstávke' && <Badge color="warning">V odstávke</Badge>}
                      {row.stav === 'V poruche' && <Badge color="danger">V poruche</Badge>}
                      {row.stav === 'V teplej zálohe' && <Badge color="info">V teplej zálohe</Badge>}
                      {row.stav === 'V teplej zálohe s povolením prác' && (
                        <Badge color="secondary">V teplej zálohe s povolením prác</Badge>
                      )}
                      {row.stav === 'Údržba' && <Badge color="secondary">Údržba</Badge>}
                      {!row.stav && '-'}
                    </td>
                    <td>{row.poznamka || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    )
  }

  const renderHorucovodTable = (title, data) => {
    if (data.length === 0) return null

    return (
      <Card className="mb-4">
        <CardHeader>
          <h5 className="mb-0">
            <i className="fa fa-thermometer-half mr-2" />
            {title}
            <Badge color="secondary" className="ml-2">
              {data.length}
            </Badge>
          </h5>
        </CardHeader>
        <CardBody>
          <div className="table-responsive">
            <Table striped hover size="sm">
              <thead>
                <tr>
                  <th>Dátum/čas</th>
                  <th>Horúcovod</th>
                  <th>Poznámka</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={`horucovod-${row.horucovod}-${row.id}-${index}`}>
                    <td>{formatDate(row.datum_cas)}</td>
                    <td>{row.horucovod || '-'}</td>
                    <td>{row.poznamka || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    )
  }

  return (
    <div>
      <div className="mb-3">
        <Badge color="light" className="text-primary">
          <i className="fa fa-eye mr-1" />
          Filtrované výsledky DDH-HV - iba zobrazenie (Celkom: {totalResults})
        </Badge>
      </div>
      <Row>
        <Col xl={6} lg={12}>
          {renderZdrojeTable('Zmeny na zdrojoch', sortedZdroje)}
        </Col>
        <Col xl={6} lg={12}>
          {renderHorucovodTable('Zmeny na horúcovode', sortedHorucovod)}
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({
  results: {
    zdroje: state.filterView.results.zdroje,
    horucovod: state.filterView.results.horucovod
  },
  isLoading: state.filterView.results.loading,
  error: state.filterView.results.error
})

export default connect(mapStateToProps)(FilterResults)
