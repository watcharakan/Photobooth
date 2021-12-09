import React, { Component } from 'react'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
export default class ScanQr extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, qrImgSrc: '' };

    }

    componentDidMount() {
        this.createPaymentSource();
    }
    render() {
        return (
            <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', color: 'black' }}>
                <div style={{ width: "400px", height: "400px", }}>
                    {this.state.qrImgSrc === '' && <div style={{ marginTop: '200px' }}><CircularProgress /></div>}
                    {this.state.qrImgSrc !== '' && <img style={{ marginBottom: '200px' }} src={this.state.qrImgSrc} alt="qrCode" />}
                </div>
            </div>
        )
    }

    createPaymentSource = () => {
        const { OmiseCard, Omise } = window
        Omise.setPublicKey('pkey_test_5pvpd2gv9r5m4ak2hq9');
        Omise.createSource('promptpay', {
            "amount": 400000,
            "currency": "THB"
        }, (statusCode, response) => {
            console.log(' response.id', response.id)
            this.setState({ loading: true })
            axios.post('http://localhost:3000/create-payment', {
                source: response.id
            }).then(res => {

                this.setState({
                    qrImgSrc: res.data.charge.source.scannable_code.image.download_uri
                })
                console.log('qrImgSrc', this.state.qrImgSrc)
            })
            console.log(response)

        });
    }

}
