import React from 'react';
import Editable from "./Editable";
import BoxTitle from './BoxTitle';
import Budget from './Budget';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            budgetCount: 0,
            budgets: [],
            totalCost: [],
            total: 0
        };
        
        this.appendBudget = this.appendBudget.bind(this);
    }

    deleteBudget = (childNumber) => {
        // This is an unnecessary line of code as it can go straight into the setState, but it looks nicer imo
        const shallowBudgets = this.state.budgets.filter((budget) => budget.props.budgNum !== childNumber);

        this.setState({
            budgets: shallowBudgets
        });
    }

    updateTotal = (childData) => {
        // let newTotal = Number(childData[0]);
        let shallowTotalCost = this.state.totalCost;
        const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);

        shallowTotalCost[childData[1]] = childData[0];
        let newTotal = shallowTotalCost.reduce(reducer);

        this.setState({
            totalCost: shallowTotalCost,
            total: newTotal
        })
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