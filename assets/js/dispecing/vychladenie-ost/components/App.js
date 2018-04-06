import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'
import Vychladenie from './Vychladenie'
import VychladenieOST from './VychladenieOST'

class App extends React.Component {
    render() {
        return (
            <div>
                <Notification/>
                <Row>
                    <Col lg={12}>
                        <Vychladenie/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg={12}>
                        <VychladenieOST/>
                    </Col>
                </Row>
                <br/><br/>
            </div>
        )
    }
}

export default App
