import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Table, Alert, Badge } from 'reactstrap'
import moment from 'moment'

// Helper function to format dates consistently
const formatDate = (dateValue) => {
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
    if (dateValue > 946684800 && dateValue < 4102444800) { // Between 2000 and 2100
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
      date = moment(dateValue, 'YYYY-MM-DD HH:mm:ss')
    } else {
      date = moment(dateValue)
    }
  }
  // If it's an object with date properties (SQL datetime object)
  else if (typeof dateValue === 'object' && dateValue.date) {
    date = moment(dateValue.date)
  }
  else {
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
  const { prevadzka = [], dispecing = [] } = results || {}

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

  const totalResults = prevadzka.length + dispecing.length

  if (totalResults === 0) {
    return (
      <Alert color="info">
        <i className="fa fa-info-circle mr-2" />
        Neboli nájdené žiadne záznamy zodpovedajúce zadaným filtrom.
      </Alert>
    )
  }

  const renderTable = (title, data, type) => {
    if (data.length === 0) return null

    return (
      <Card className="mb-4">
        <CardHeader>
          <h5 className="mb-0">
            <i className={`fa ${type === 'prevadzka' ? 'fa-wrench' : 'fa-headset'} mr-2`} />
            {title}
            <Badge color="secondary" className="ml-2">{data.length}</Badge>
          </h5>
        </CardHeader>
        <CardBody>
          <div className="table-responsive">
            <Table striped hover size="sm">
              <thead>
                <tr>
                  <th>Dátum začiatku</th>
                  <th>OST</th>
                  <th>Vplyv na dodávku</th>
                  <th>Vývod</th>
                  <th>Stav</th>
                  <th>Poznámka</th>
                  <th>Vybavuje</th>
                </tr>
              </thead>
              <tbody>
                {data.map(row => (
                  <tr key={row.id}>
                    <td>
                      {formatDate(row.datum_cas_zaciatok)}
                    </td>
                    <td>{row.ost || '-'}</td>
                    <td>
                      {row.vplyv_na_dodavku === 'ano' ? (
                        <Badge color="danger">Áno</Badge>
                      ) : row.vplyv_na_dodavku === 'nie' ? (
                        <Badge color="success">Nie</Badge>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>{row.vyvod || '-'}</td>
                    <td>
                      {row.stav === 'novy' && <Badge color="info">Nový</Badge>}
                      {row.stav === 'spracovany' && <Badge color="warning">Spracovaný</Badge>}
                      {row.stav === 'ukonceny' && <Badge color="success">Ukončený</Badge>}
                      {!row.stav && '-'}
                    </td>
                    <td>{row.poznamka || '-'}</td>
                    <td>{row.vybavuje || '-'}</td>
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
          Filtrované výsledky - iba zobrazenie (Celkom: {totalResults})
        </Badge>
      </div>
      {renderTable('Práce na OST - prevádzka', prevadzka, 'prevadzka')}
      {renderTable('Práce na OST - dispečing a poruchová služba', dispecing, 'dispecing')}
    </div>
  )
}

const mapStateToProps = state => ({
  results: {
    prevadzka: state.filterView.results.prevadzka,
    dispecing: state.filterView.results.dispecing
  },
  isLoading: state.filterView.results.loading,
  error: state.filterView.results.error
})

export default connect(mapStateToProps)(FilterResults)