import React, { Component } from 'react'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Omise from 'omise';
export default class ScanQr extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, qrImgSrc: '', charge: {}, isSuccess: false };

    }

    componentDidMount() {
        this.createPaymentSource();
        this.checkChargeStatus()
    }
    render() {
        return (
            <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', color: 'black' }}>
                <div style={{ width: "400px", height: "400px", }}>
                    {this.state.qrImgSrc === '' && <div style={{ marginTop: '200px' }}><CircularProgress /></div>}
                    {this.state.qrImgSrc !== '' && <img style={{ marginBottom: '200px' }} src={this.state.qrImgSrc} alt="qrCode" />}
                    {this.state.isSuccess && <div>PAID</div>}
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
                    qrImgSrc: res.data.charge.source.scannable_code.image.download_uri,
                    charge: res.data.charge
                })
                console.log('qrImgSrc', this.state.qrImgSrc)
                console.log('charge', this.state.charge)
            })
            console.log(response)

        });
    }

    checkChargeStatus = () => {
        let myInterval;
        myInterval = setInterval(() => {
            axios.post('http://localhost:3000/retrieve-charge', {
                chargeId: this.state.charge.id
            }).then(res => {
                this.setState({ isSuccess: res.data.response.status === 'successful' })
                console.log('res.data.response.paid', this.state.isSuccess)
                if (!!this.state.isSuccess) {
                    clearInterval(myInterval);
                    // this.openDslr();
                    return;
                }
            })
        }, 10000);
    }

    openDslr = () => {
        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
            },
        };
        console.log('dslr is openning')
        axios.get('http://localhost:3000/open', config)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

}
