import React from 'react';
import './SectionForm.css';
import Section from './Section.js';

class SectionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [],
            sectionCount: 0
        };

        this.appendSection = this.appendSection.bind(this);
    }

    deleteSection = (childNumber) => { 
        // This is an unnecessary line of code as it can go straight into the setState, but it looks nicer imo
        const shallowSection = this.state.sections.filter((sections) => sections.props.sectionNum !== childNumber);

        this.setState({
            sections: shallowSection
        });
    }

    appendSection() {
        this.setState({
            sections: [
                ...this.state.sections,
                    <Section key={this.state.sectionCount} sectionNum={this.state.sectionCount}
                        deleteSection={this.deleteSection}
                    />
            ],
            sectionCount: this.state.sectionCount + 1
        })
    }

    render() {
        return (
            <div className="SectionFormMain">
                <button className="btn" onClick={this.appendSection}>Add Section</button>
                {this.state.sections}
            </div>
        )
    }
}

export default SectionForm;