import React from 'react';
import './SectionForm.css';

class SectionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            items: ['why', 'are', 'you']
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            items: this.state.items.concat(this.state.value)
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className="SectionFormMain">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Budget Item" />
                    <input type="submit" value="Submit" />
                </form>
                <ul className="ItemList">
                    {this.state.items.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SectionForm;