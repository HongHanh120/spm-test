import React, {Component} from 'react';
import {Route, HashRouter as Router} from 'react-router-dom'
import QuestionList from "./components/QuestionList";
import {Container} from 'reactstrap';

import './scss/style.scss';
import './css/bootstrap.min.css';
import './css/bootstrap_limitless.min.css';
import './css/colors.min.css';
import './css/components.min.css';
import './css/layout.min.css';
import './css/icons/icomoon/styles.css'


class App extends Component {
    render() {
        return(
            <div className='App'>
                <Router>
                    <Container className='Container'>
                        <Route path='/test/:id' component={QuestionList} />
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;