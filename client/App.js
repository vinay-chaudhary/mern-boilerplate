import React from 'react';
import Helmet from 'react-helmet';
import './style.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    title="ACL Traffic Analyzer"
                    meta={[
                        {
                            charset: 'UTF-8',
                        }, {
                            name: 'viewport',
                            content: 'width=device-width, initial-scale=1.0',
                        }, {
                            'http-equiv': 'X-UA-Compatible',
                            content: 'IE=edge',
                        },
                    ]}
                />
                <h1>HULLLLLLLLOOOOOOOOOOOOOOO</h1>
            </div>

        )
    }
}