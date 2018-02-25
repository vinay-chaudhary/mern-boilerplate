/* eslint-disable global-require */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import LoginPage from './login';

// import App from './modules/App/App';

class App extends React.Component {
    render() {
        return (
            <h1>My new App</h1>
        );
    }
}

class NewApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Hurray</h1>
                <RaisedButton primary label="Default" />
            </div>
        );
    }
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    );
};

export default Router;
