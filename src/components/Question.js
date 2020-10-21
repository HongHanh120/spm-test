import React, {Component} from 'react';
import Answer from "./Answer";

class Question extends Component {
    render() {
        const {question} = this.props;
        const answers = question.answers.sort(() => 0.5 - Math.random());

        return (
            <div className='Answer'>
                <div className='form-group pt-2'>
                    <label className='font-weight-semibold'>
                        {question.question}
                    </label>
                    {
                        answers.map(answer => {
                            return <Answer key={answer.key} answer={answer}
                                corrects={question.corrects} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Question