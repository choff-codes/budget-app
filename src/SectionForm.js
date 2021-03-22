import React from 'react';
import './SectionForm.css';
import Section from './Section.js';
import SideBar from './SideBar.js';

class SectionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [],
            sectionCount: 0,
            totalArray: [],
            fullTotal: 0
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

    adjustTotal = (childData) => {
        // Build a copy of the current "cost array"
        let shallowTotalCost = this.state.totalArray;
        const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);

        // Change the assigned value to the current <Budget/> in the array
        // The index of each array value here refers to a different budget, and their value is their total
        shallowTotalCost[childData[1]] = childData[0];
        let newTotal = shallowTotalCost.reduce(reducer);

        this.setState({
            totalArray: shallowTotalCost,
            fullTotal: newTotal
        })
    }

    appendSection() {
        this.setState({
            sections: [
                ...this.state.sections,
                    <Section key={this.state.sectionCount} sectionNum={this.state.sectionCount}
                        deleteSection={this.deleteSection} adjustTotal={this.adjustTotal}
                    />
            ],
            sectionCount: this.state.sectionCount + 1
        })
    }

    render() {
        return (
            <div className="SectionFormMain">
                <h2>{this.state.fullTotal}</h2>
                <SideBar/>
                <button className="btn" onClick={this.appendSection}>Add Section</button>
                {this.state.sections}
            </div>
        )
    }
}

export default SectionForm;