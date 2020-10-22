import React, {Component} from 'react';
import PubSub from 'pubsub-js';

class Answer extends Component {
    state = {
        checked: false,
        color: '#333'
    };

    componentDidMount() {
        PubSub.subscribe('SUBMIT_ANSWER', () => {
            const {checked} = this.state;
            const {answer, corrects} = this.props;
            if(checked && corrects.includes(answer.key)) {
                this.setState({color: 'blue'})
            }
            else if(!checked && corrects.includes(answer.key)) {
                this.setState({color: 'red'})
            }
            else {
                this.setState({color: '#333'})
            }
        })
    }

    onChangeCheck = (e) => {
        const {checked} = e.target;
        this.setState({checked})
    };

    render() {
        const {answer} = this.props;
        const {checked, color} = this.state;

        const span_class = checked ? 'checked' : '';

        return (
            <div className='Answer form-check' style={{color}}>
                <label className='form-check-label'>
                    <div className='uniform-checker'>
                        <span className={span_class}>
                            <input type='checkbox' className='form -check-input-styled' checked={checked}
                                   onChange={this.onChangeCheck.bind(this)}/>
                        </span>
                    </div>
                    {answer.text}
                </label>
            </div>
        )
    }
}

export default Answer