import React from "react";
import axios from 'axios';

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
            <button onClick={() => this.openDslr()}>
                Open dslr
            </button>
        );
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

export default List;
