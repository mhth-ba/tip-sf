import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Button, Row, Col, Table } from 'reactstrap'
import moment from 'moment'
import {
  fetchOpravneniaRequest,
  fetchZoznamOSTRequest,
  fetchZoznamDispecerovRequest,
  fetchZoznamPoruchovkaRequest,
  fetchDenneDispecerskeHlasenieOSTRequest,
  fetchPraceNaOSTPrevadzkaRequest,
  fetchPraceNaOSTDispecingRequest,
  fetchPlanovanePraceOdstavkyRequest
} from '../actions'
import * as TYPES from '../../../services/ActionTypes'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    const today = new Date()
    this.state = {
      currentYear: today.getFullYear(),
      currentMonth: today.getMonth(), // month is 0-indexed
      selectedDate: today
    }
    this.locale = navigator.language || 'en-US'

    this.handlePrevMonth = this.handlePrevMonth.bind(this)
    this.handleNextMonth = this.handleNextMonth.bind(this)
    this.handlePrevYear = this.handlePrevYear.bind(this)
    this.handleNextYear = this.handleNextYear.bind(this)
    this.handleDateClick = this.handleDateClick.bind(this)
    this.handleGoToday = this.handleGoToday.bind(this)
  }

  componentDidMount() {
    // Load permissions
    this.props.fetchOpravnenia()
    this.props.fetchZoznamOST()
    this.props.fetchDispeceri()
    this.props.fetchPoruchovka()
    // On mount, load today's main entry.
    const today = new Date()
    const dateString = moment(today).format('YYYY-MM-DD')
    this.props.fetchDenneDispecerskeHlasenieOST(dateString)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Get previous and current hlavny.id values
    const prevId = prevProps.hlavny ? prevProps.hlavny.id : null
    const currentId = this.props.hlavny ? this.props.hlavny.id : null

    // Only trigger the fetch if the id has actually changed
    if (prevId !== currentId) {
      if (currentId) {
        this.props.fetchPraceNaOSTPrevadzka(currentId)
        this.props.fetchPraceNaOSTDispecing(currentId)
        this.props.fetchPlanovanePraceOdstavky(currentId)
      } else {
        // Optionally, dispatch an action to clear related entries
        // this.props.clearPraceNaOSTPrevadzka();
      }
    }
  }

  getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate()
  }

  getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay()
  }

  handlePrevMonth() {
    this.setState(prevState => {
      let { currentMonth, currentYear } = prevState
      currentMonth--
      if (currentMonth < 0) {
        currentMonth = 11
        currentYear--
      }
      return { currentMonth, currentYear }
    })
  }

  handleNextMonth() {
    this.setState(prevState => {
      let { currentMonth, currentYear } = prevState
      currentMonth++
      if (currentMonth > 11) {
        currentMonth = 0
        currentYear++
      }
      return { currentMonth, currentYear }
    })
  }

  handlePrevYear() {
    this.setState(prevState => ({
      currentYear: prevState.currentYear - 1
    }))
  }

  handleNextYear() {
    this.setState(prevState => ({
      currentYear: prevState.currentYear + 1
    }))
  }

  handleDateClick(day) {
    const { currentYear, currentMonth } = this.state
    const selectedDate = new Date(currentYear, currentMonth, day)
    this.setState({ selectedDate })
    const dateString = moment(selectedDate).format('YYYY-MM-DD')
    this.props.fetchDenneDispecerskeHlasenieOST(dateString)
  }

  handleGoToday() {
    const today = new Date()
    this.setState({
      currentYear: today.getFullYear(),
      currentMonth: today.getMonth(),
      selectedDate: today
    })
    const dateString = moment(today).format('YYYY-MM-DD')
    this.props.fetchDenneDispecerskeHlasenieOST(dateString)
  }

  renderCalendar() {
    const { currentYear, currentMonth, selectedDate } = this.state
    const daysInMonth = this.getDaysInMonth(currentYear, currentMonth)
    const firstDay = this.getFirstDayOfMonth(currentYear, currentMonth)
    // Monday-based offset: if first day is Sunday (0), offset = 6, else offset = firstDay - 1.
    const offset = firstDay === 0 ? 6 : firstDay - 1

    const weeks = []
    let week = []

    for (let i = 0; i < offset; i++) {
      week.push(null)
    }
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day)
      if (week.length === 7) {
        weeks.push(week)
        week = []
      }
    }
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null)
      }
      weeks.push(week)
    }

    const weekDays = []
    // January 4, 2021 was a Monday.
    const baseMonday = new Date(2021, 0, 4)
    for (let i = 0; i < 7; i++) {
      const dayName = new Date(
        baseMonday.getFullYear(),
        baseMonday.getMonth(),
        baseMonday.getDate() + i
      ).toLocaleString(this.locale, { weekday: 'short' })
      weekDays.push(dayName)
    }

    return (
      <Table bordered responsive>
        <thead>
          <tr>
            {weekDays.map(dayName => (
              <th key={dayName} style={{ textAlign: 'center' }}>
                {dayName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => {
                if (!day) {
                  return <td key={dayIndex}>&nbsp;</td>
                }
                const today = new Date()
                const isToday =
                  day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()

                const isSelected =
                  selectedDate &&
                  day === selectedDate.getDate() &&
                  currentMonth === selectedDate.getMonth() &&
                  currentYear === selectedDate.getFullYear()

                return (
                  <td
                    key={dayIndex}
                    onClick={() => this.handleDateClick(day)}
                    style={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      backgroundColor: isSelected ? '#007bff' : isToday ? '#d1ecf1' : 'inherit',
                      color: isSelected ? '#fff' : 'inherit'
                    }}
                  >
                    {day}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  render() {
    const { currentYear, currentMonth } = this.state
    const monthNames = [...Array(12).keys()].map(m =>
      new Date(currentYear, m, 1).toLocaleString(this.locale, { month: 'long' })
    )
    const today = new Date()
    const isTodayView = currentYear === today.getFullYear() && currentMonth === today.getMonth()

    return (
      <Card style={{ maxWidth: '420px' }}>
        <CardHeader className="bg-primary text-white">Kalendár</CardHeader>
        <CardBody>
          <Row className="mb-3 align-items-center">
            <Col xs="4" className="d-flex justify-content-start">
              <Button color="secondary" onClick={this.handlePrevYear}>
                « Rok
              </Button>
            </Col>
            <Col xs="4" className="text-center">
              <h5 style={{ margin: 0 }}>
                {monthNames[currentMonth]} {currentYear}
              </h5>
            </Col>
            <Col xs="4" className="d-flex justify-content-end">
              <Button color="secondary" onClick={this.handleNextYear}>
                Rok »
              </Button>
            </Col>
          </Row>
          <Row className="mb-3 align-items-center">
            <Col xs="4" className="d-flex justify-content-start">
              <Button color="secondary" onClick={this.handlePrevMonth}>
                « Mesiac
              </Button>
            </Col>
            <Col xs="4" className="d-flex justify-content-center">
              <Button color="primary" onClick={this.handleGoToday} disabled={isTodayView}>
                Dnes
              </Button>
            </Col>
            <Col xs="4" className="d-flex justify-content-end">
              <Button color="secondary" onClick={this.handleNextMonth}>
                Mesiac »
              </Button>
            </Col>
          </Row>
          {this.renderCalendar()}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny
})

const mapDispatchToProps = dispatch => ({
  fetchOpravnenia: () => dispatch(fetchOpravneniaRequest()),
  fetchZoznamOST: () => dispatch(fetchZoznamOSTRequest()),
  fetchDispeceri: () => dispatch(fetchZoznamDispecerovRequest()),
  fetchPoruchovka: () => dispatch(fetchZoznamPoruchovkaRequest()),
  fetchDenneDispecerskeHlasenieOST: date => dispatch(fetchDenneDispecerskeHlasenieOSTRequest(date)),
  fetchPraceNaOSTPrevadzka: hlavnyId => dispatch(fetchPraceNaOSTPrevadzkaRequest(hlavnyId)),
  fetchPraceNaOSTDispecing: hlavnyId => dispatch(fetchPraceNaOSTDispecingRequest(hlavnyId)),
  fetchPlanovanePraceOdstavky: hlavnyId => dispatch(fetchPlanovanePraceOdstavkyRequest(hlavnyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
