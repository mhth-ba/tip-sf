import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
  Input,
  Label,
  FormGroup
} from 'reactstrap'
import classnames from 'classnames'
import moment from 'moment'
import { fetchAuditlogRequest, fetchAuditlogByDateRequest } from '../actions'

class AuditLog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: '1',
      currentPage: 1,
      itemsPerPage: 5,
      pageSizes: [5, 10, 20, 50]
    }

    this.toggle = this.toggle.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this)
  }

  componentDidMount() {
    // Load all audit logs initially (for Tab 1)
    this.props.fetchAuditlog()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If tab changed to '1', fetch all logs
    if (prevState.activeTab !== this.state.activeTab && this.state.activeTab === '1') {
      this.props.fetchAuditlog()
      this.setState({ currentPage: 1 }) // Reset to first page when changing tabs
    }

    // If tab changed to '2' or date changed while on tab 2, fetch logs for the specific date
    if (this.state.activeTab === '2') {
      // Check if hlavny data is available and has a date
      // For OST
      if (this.props.hlavny && this.props.hlavny.datum) {
        // Check if tab changed to '2' or date changed
        if (
          prevState.activeTab !== this.state.activeTab ||
          (prevProps.hlavny && this.props.hlavny && prevProps.hlavny.datum !== this.props.hlavny.datum)
        ) {
          const dateString = moment.unix(this.props.hlavny.datum).format('YYYY-MM-DD')
          this.props.fetchAuditlogByDate(dateString)
          this.setState({ currentPage: 1 }) // Reset to first page when changing data
        }
      }
      // For HV
      else if (this.props.hlavny && this.props.hlavny.ost_data && this.props.hlavny.ost_data.datum) {
        // Check if tab changed to '2' or date changed
        if (
          prevState.activeTab !== this.state.activeTab ||
          (prevProps.hlavny &&
            this.props.hlavny &&
            prevProps.hlavny.ost_data &&
            prevProps.hlavny.ost_data.datum !== this.props.hlavny.ost_data.datum)
        ) {
          const dateString = moment.unix(this.props.hlavny.ost_data.datum).format('YYYY-MM-DD')
          this.props.fetchAuditlogByDate(dateString)
          this.setState({ currentPage: 1 }) // Reset to first page when changing data
        }
      }
    }

    // Reset to first page if page size changes
    if (prevState.itemsPerPage !== this.state.itemsPerPage) {
      this.setState({ currentPage: 1 })
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber })
  }

  handlePageSizeChange(e) {
    this.setState({ itemsPerPage: parseInt(e.target.value) })
  }

  // Format timestamp for display
  formatTimestamp(timestamp) {
    if (!timestamp) return '-'
    return moment.unix(timestamp).format('DD.MM.YYYY HH:mm')
  }

  formatValueIfTimestamp(value) {
    if (!value) return '-'

    if (/^\d{10}$/.test(value)) {
      const timestamp = parseInt(value, 10)
      return moment.unix(timestamp).format('DD.MM.YYYY HH:mm')
    }

    return value
  }

  // Get badge color based on table name/action
  getBadgeColor(tabulka) {
    if (!tabulka) return 'secondary'

    if (tabulka.includes('CREATE') || tabulka.toUpperCase().includes('CREATE')) return 'success'
    if (tabulka.includes('UPDATE') || tabulka.toUpperCase().includes('UPDATE')) return 'primary'
    if (tabulka.includes('DELETE') || tabulka.toUpperCase().includes('DELETE')) return 'danger'

    // Special handling for HV tables to highlight them
    if (tabulka.includes('DDH_HV')) return 'info'

    return 'secondary'
  }

  // Determine which data to show based on active tab
  getAuditData() {
    const { auditlog } = this.props
    const { activeTab } = this.state

    if (activeTab === '1') {
      return auditlog.udaje_vsetky || []
    } else {
      return auditlog.udaje_hlavny || []
    }
  }

  // Get current page data
  getCurrentPageData(data) {
    const { currentPage, itemsPerPage } = this.state
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    return data.slice(indexOfFirstItem, indexOfLastItem)
  }

  renderPagination(data) {
    const { currentPage, itemsPerPage, pageSizes } = this.state
    const totalPages = Math.ceil(data.length / itemsPerPage)

    // Don't render pagination if there's only one page
    if (totalPages <= 1) {
      return null
    }

    // Function to generate page number links with ellipses
    const getPageNumbers = () => {
      const maxPageButtons = 5 // Maximum number of page buttons to show (excluding next/prev/first/last)
      const pageNumbers = []

      if (totalPages <= maxPageButtons) {
        // If we have few pages, show all page numbers
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i)
        }
      } else {
        // Always show first page
        pageNumbers.push(1)

        // Calculate start and end of the "middle" section
        let startPage = Math.max(2, currentPage - 1)
        let endPage = Math.min(totalPages - 1, currentPage + 1)

        // Adjust if we're near the beginning
        if (currentPage <= 3) {
          endPage = Math.min(maxPageButtons - 1, totalPages - 1)
        }
        // Adjust if we're near the end
        else if (currentPage >= totalPages - 2) {
          startPage = Math.max(2, totalPages - (maxPageButtons - 2))
        }

        // Add ellipsis before the middle section if needed
        if (startPage > 2) {
          pageNumbers.push('...')
        }

        // Add middle section page numbers
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i)
        }

        // Add ellipsis after the middle section if needed
        if (endPage < totalPages - 1) {
          pageNumbers.push('...')
        }

        // Always show last page
        if (totalPages > 1) {
          pageNumbers.push(totalPages)
        }
      }

      return pageNumbers
    }

    return (
      <div>
        <Row className="mt-3 mb-3">
          <Col xs="auto" className="mr-auto d-flex align-items-center">
            <FormGroup className="mb-0 d-flex align-items-center">
              <Label for="pageSizeSelect" className="mr-2 mb-0">
                Počet záznamov na stránku:
              </Label>
              <Input
                type="select"
                name="pageSize"
                id="pageSizeSelect"
                value={itemsPerPage}
                onChange={this.handlePageSizeChange}
                bsSize="sm"
                className="w-25"
              >
                {pageSizes.map(size => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col xs="auto">
            <Pagination size="sm" aria-label="Audit log pagination">
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink onClick={() => this.handlePageChange(1)}>{'<<'}</PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink onClick={() => this.handlePageChange(currentPage - 1)}>{'<'}</PaginationLink>
              </PaginationItem>

              {getPageNumbers().map((item, index) => {
                if (item === '...') {
                  // Render ellipsis (not clickable)
                  return (
                    <PaginationItem key={`ellipsis-${index}`} disabled>
                      <PaginationLink>...</PaginationLink>
                    </PaginationItem>
                  )
                } else {
                  // Render regular page number
                  return (
                    <PaginationItem key={item} active={currentPage === item}>
                      <PaginationLink onClick={() => this.handlePageChange(item)}>{item}</PaginationLink>
                    </PaginationItem>
                  )
                }
              })}

              <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink onClick={() => this.handlePageChange(currentPage + 1)}>{'>'}</PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink onClick={() => this.handlePageChange(totalPages)}>{'>>'}</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </div>
    )
  }

  renderAuditTable(data) {
    const { loading } = this.props.auditlog || { loading: false }
    const { currentPage, itemsPerPage } = this.state

    if (loading) {
      return (
        <div className="text-center p-3">
          <p className="mt-2">Načítavam údaje...</p>
        </div>
      )
    }

    if (!data || data.length === 0) {
      return (
        <div className="text-center p-3">
          <p>Žiadne záznamy na zobrazenie</p>
        </div>
      )
    }

    // Get current page data
    const currentPageData = this.getCurrentPageData(data)

    return (
      <div>
        <div className="table-responsive" style={{ maxHeight: '210px', overflowX: 'auto' }}>
          <Table striped size="sm">
            <thead>
              <tr>
                <th>Čas</th>
                <th>Akcia</th>
                <th>Používateľ</th>
                <th>Hodnota</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((item, index) => (
                <tr key={index}>
                  <td className="text-nowrap">{this.formatTimestamp(item.vytvorene)}</td>
                  <td>
                    <Badge color={this.getBadgeColor(item.tabulka)}>
                      {item.tabulka} {item.stlpec ? `(${item.stlpec})` : ''}
                    </Badge>
                  </td>
                  <td className="text-nowrap">
                    {item.pouzivatel && item.pouzivatel.fullname ? item.pouzivatel.fullname : '-'}
                  </td>
                  <td className="text-truncate" style={{ maxWidth: '150px' }} title={item.hodnota}>
                    {this.formatValueIfTimestamp(item.hodnota)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Pagination and page size selector */}
        <Row className="mb-2">
          <Col>
            <small className="text-muted">
              Zobrazujem záznamy {(currentPage - 1) * itemsPerPage + 1} až{' '}
              {Math.min(currentPage * itemsPerPage, data.length)} z celkovo {data.length}
            </small>
          </Col>
        </Row>

        {this.renderPagination(data)}
      </div>
    )
  }

  // Get currently selected date to display in the tab
  getSelectedDateDisplay() {
    // For OST
    if (this.props.hlavny && this.props.hlavny.datum) {
      return moment.unix(this.props.hlavny.datum).format('DD.MM.YYYY')
    }
    // For HV
    else if (this.props.hlavny && this.props.hlavny.ost_data && this.props.hlavny.ost_data.datum) {
      return moment.unix(this.props.hlavny.ost_data.datum).format('DD.MM.YYYY')
    }

    return 'Zvolený deň'
  }

  // Check if a date is currently selected
  hasSelectedDate() {
    // For OST
    if (this.props.hlavny && this.props.hlavny.datum) {
      return true
    }
    // For HV
    else if (this.props.hlavny && this.props.hlavny.ost_data && this.props.hlavny.ost_data.datum) {
      return true
    }

    return false
  }

  render() {
    const { activeTab } = this.state
    const selectedDateDisplay = this.getSelectedDateDisplay()

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Aktivita</CardHeader>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => this.toggle('1')}
                style={{ cursor: 'pointer' }}
              >
                Všetky záznamy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => this.toggle('2')}
                style={{ cursor: 'pointer' }}
                disabled={!this.hasSelectedDate()}
              >
                {selectedDateDisplay}
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activeTab} className="mt-3">
            <TabPane tabId="1">{this.renderAuditTable(this.getAuditData())}</TabPane>
            <TabPane tabId="2">
              {!this.hasSelectedDate() ? (
                <div className="text-center p-3">
                  <p>Najprv vyberte deň v kalendári</p>
                </div>
              ) : (
                this.renderAuditTable(this.getAuditData())
              )}
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  auditlog: state.auditlog || {},
  hlavny: state.hlavny
})

const mapDispatchToProps = dispatch => ({
  fetchAuditlog: id => dispatch(fetchAuditlogRequest(id)),
  fetchAuditlogByDate: date => dispatch(fetchAuditlogByDateRequest(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuditLog)
