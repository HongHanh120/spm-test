import React, {Component} from 'react'
import Question from "./Question";
import test from '../../public/spm';
import {Button} from 'reactstrap';
import PubSub from 'pubsub-js';
import {Link} from 'react-router-dom';

class QuestionList extends Component {
    handleClickSubmit = () => {
        PubSub.publish('SUBMIT_ANSWER', 'submit answer');
    };

    makeAllQuestion = () => {
        const questions = [];
        for(let value of Object.values(test)) {
            questions.push(...value)
        }
        return questions
    };

    render() {
        const {match: {params: {id}}} = this.props;
        const questions = id === 'all' ? this.makeAllQuestion() : test[id].sort(() => 0.5 - Math.random());
        // const questions = this.makeAllQuestion();

        return (
            <div  className='QuestionList'>
                <div>
                    <Link className='mr-2' to={'/test/all'}>all</Link>
                    {
                        Object.keys(test).map(key => {
                            return <Link key={key} className='mr-2' to={'/test/' + key}>{key}</Link>
                        })
                    }
                </div>
                {
                    questions.map((item, i) => {
                        return <Question key={id + i} question={item} />
                    })
                }
                <div className='text-right my-3'>
                    <Button color='primary' onClick={this.handleClickSubmit.bind(this)}>Submit</Button>
                </div>
            </div>
        );
    }
}

export default QuestionList

