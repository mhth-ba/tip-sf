import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'
import Spravovat from './Sprava'
import Hlavny from './Hlavny'
import Karty from './Karty'
import DodavkaTepla from './DodavkaTepla'
import Vstupy from './Vstupy'

import ErrorBoundary from '../../../components/ErrorBoundary'

class App extends React.Component {
    render() {
        return (
            <div>
                <Notification/>
                <Row>
                    <Col md="12" lg="6">
                        <Spravovat/>
                    </Col>
                    <Col md="12" lg="6">
                        <Hlavny/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Karty
                            DodavkaTepla={<DodavkaTepla/>}
                            Vstupy={<Vstupy/>}
                        />
                    </Col>
                </Row>
                <br/><br/>
            </div>
        )
    }
}

export default App
