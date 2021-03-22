import React from 'react';
import BoxTitle from './BoxTitle';
import Budget from './Budget';

class Section extends React.Component {
    constructor(props) {
        super(props);

        // This state architecture might be naive, maybe worth looking into the limits of an array expanding
        this.state = {
            budgetCount: 0,
            budgets: [],
            totalCost: [],
            total: 0
        };
        
        this.appendBudget = this.appendBudget.bind(this);
    }

    deleteBudget = (childData) => {
        // This is an unnecessary line of code as it can go straight into the setState, but it looks nicer imo
        // Filters through the budgets, removing the component associated with the correct ID
        const shallowBudgets = this.state.budgets.filter((budget) => budget.props.budgNum !== childData[0]);

        // Change the value correlated to this component in the cost array to 0
        let shallowTotalCost = this.state.totalCost;
        shallowTotalCost[childData[0]] = 0;

        this.setState({
            budgets: shallowBudgets,
            total: this.state.total - childData[1],
            totalCost: shallowTotalCost
        });
    }

    updateTotal = (childData) => {
        // Build a copy of the current "cost array"
        let shallowTotalCost = this.state.totalCost;
        const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);

        // Change the assigned value to the current <Budget/> in the array
        // The index of each array value here refers to a different budget, and their value is their total
        shallowTotalCost[childData[1]] = childData[0];
        let newTotal = shallowTotalCost.reduce(reducer);

        this.setState({
            totalCost: shallowTotalCost,
            total: newTotal
        })
    }

    componentDidUpdate() {
        this.props.adjustTotal([this.state.total, this.props.sectionNum]);
    }

    appendBudget() {
        this.setState({
            budgets: [
                ...this.state.budgets,
                <Budget key={this.state.budgetCount} updateTotal={this.updateTotal} 
                    budgNum={this.state.budgetCount} deleteBudget={this.deleteBudget}
                />
            ],
            budgetCount: this.state.budgetCount + 1
        })
    }

    render() {
        return (
            <div className="SectionFormMain">
                <button className="btn" onClick={() => this.props.deleteSection(this.props.sectionNum)}>X</button>
                <BoxTitle/>

                {this.state.budgets}
                <button className="btn" onClick={this.appendBudget}>Add Budget</button>
                <h2>${this.state.total}</h2>
            </div>
        )
    }
}

export default Section;