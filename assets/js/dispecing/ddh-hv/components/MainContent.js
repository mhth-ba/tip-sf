import React from 'react'
import { connect } from 'react-redux'
import NoDataAlert from './NoDataAlert'
import { Col, Row } from 'reactstrap'
import moment from 'moment'
import { Alert } from 'reactstrap'
import Hlavicka from './Hlavicka'
import ZmenaNaZdrojoch from './ZmenaNaZdrojoch'
import ZmenaNaHV from './ZmenaNaHV'
import StavZariadeni from './StavZariadeni'

const MainContent = ({ hlavny }) => {
  if (!hlavny.initialized) {
    return <div></div>
  }

  // If no OST_Hlavny record exists for the selected date
  if (!hlavny.ost_hlavny_id) {
    return <NoDataAlert />
  }

  // Check if the entry date is in the past
  const isHistoricalData =
    hlavny.ost_data &&
    hlavny.ost_data.datum &&
    moment.unix(hlavny.ost_data.datum).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')

  // Calculate how many days old the data is
  const daysDifference = isHistoricalData
    ? moment()
        .startOf('day')
        .diff(moment.unix(hlavny.ost_data.datum).startOf('day'), 'days')
    : 0

  // Check if the data is older than the 3-day edit window
  const isTooOldToEdit = daysDifference > 2

  return (
    <div>
      {isHistoricalData && (
        <Row>
          <Col>
            <Alert color="info" className="mb-3">
              <i className="fa fa-info-circle mr-2"></i>
              Zobrazujete historické údaje z {moment.unix(hlavny.ost_data.datum).format('DD.MM.YYYY')}.
              {isTooOldToEdit
                ? ' Zmeny nie sú povolené pre záznamy staršie ako 3 dni.'
                : ' Záznamy do 3 dní je možné upravovať.'}
            </Alert>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <Hlavicka />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={6} sm={12}>
          <ZmenaNaZdrojoch />
        </Col>
        <Col md={6} sm={12}>
          <ZmenaNaHV />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <StavZariadeni />
        </Col>
      </Row>
      <br />
    </div>
  )
}

const mapStateToProps = state => ({
  hlavny: state.hlavny
})

export default connect(mapStateToProps)(MainContent)
