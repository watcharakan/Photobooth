import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { change: true };
    }

    componentDidMount() {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
    }

    render() {
        return (
            <div style={{ width: '90%', display: 'flex', height: '750px' }}>
                <div style={{ width: '40%', height: '100%' }}>
                    <Row>
                        <Col style={{ height: '150px', width: '150px', padding: '10px', backgroundColor: 'skyblue', marginRight: '20px' }}>
                        </Col>
                        <Col style={{ height: '150px', width: '150px', padding: '10px', backgroundColor: 'skyblue' }}>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '20px' }}>
                        <Col style={{ height: '150px', width: '150px', padding: '10px', backgroundColor: 'skyblue', marginRight: '20px' }}>
                        </Col>
                        <Col style={{ height: '150px', width: '150px', padding: '10px', backgroundColor: 'skyblue' }}>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '20px' }}>
                        <Col style={{ height: '150px', width: '150px', padding: '10px', backgroundColor: 'skyblue', marginRight: '20px' }}>
                        </Col>
                        <Col style={{ height: '150px', width: '150px', padding: '10px', backgroundColor: 'skyblue' }}>
                        </Col>
                    </Row>
                </div>
                <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'flex-start', paddingTop: '30px', color: 'black', flexDirection: 'column', marginLeft: '40px' }}>
                    <h2>3 Acts (2 Copies)</h2>
                    <Container style={{ width: '70%', marginTop: '20px' }}>
                        <Row>
                            <Col style={{ textAlign: 'left', color: 'grey' }}>Tickket</Col>
                            <Col style={{ textAlign: 'right' }}>150</Col>
                            <Col>THB</Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'left', color: 'grey' }}>VAT 7%</Col>
                            <Col style={{ textAlign: 'right' }}>10.50</Col>
                            <Col>THB</Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'left', color: 'grey' }}>Total</Col>
                            <Col style={{ textAlign: 'right' }}>160.50</Col>
                            <Col>THB</Col>
                        </Row>
                    </Container>
                    <div style={{ width: '100%' }}>
                        <div style={{ width: '100%', height: '250px', textAlign: 'left', marginTop: '50px' }}>term and cons container</div>
                        <Link to="/payment">
                            <Button style={{ width: '80%', backgroundColor: 'black', color: 'white' }}>PAY</Button>
                        </Link>
                        {/* <Button style={{ width: '80%', backgroundColor: 'black', color: 'white' }} onClick={() => this.openDslr()} variant="contained">PAY</Button> */}

                    </div>
                </div>
            </div>
        );
    }
}

export default List;
