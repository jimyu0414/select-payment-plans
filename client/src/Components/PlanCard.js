import React from 'react';
import Plan from './Plan';

class PlanCard extends React.Component{


  state={
    plans: [],
    tabState: "tab-weekly",
  }

    showWeeklyPlans = () => {
        this.setState({
            plans: this.props.weeklyPlans,
            tabState: 'tab-weekly'
        })
    }

    showFornightlyPlans = () => {
        this.setState({
            plans: this.props.fornightlyPlans,
            tabState: 'tab-fornightly'
        })
    }

    showMonthlyPlans = () => {
        this.setState({
            plans: this.props.monthlyPlans,
            tabState: 'tab-monthly'
        })
    }

    handlePlanOnclick = (id,paymentCount,interval) => {
        let selectplans;
        // check if its page onload
        if(this.state.plans.length === 0){
            selectplans = this.props.weeklyPlans 
        }else{
            selectplans =this.state.plans
        }
         selectplans = selectplans.map(plan => {
            if(plan.id === id){
                plan.selectStateClass = "plan-card__plan-wrapper--plan  plan-card__plan-wrapper--plan-selected "
            }else{
                plan.selectStateClass = "plan-card__plan-wrapper--plan  plan-card__plan-wrapper--plan-unselected"
            }
            return plan;
        });
        this.setState({
            plans: selectplans
        });

        //callback selected plan 
        this.props.handleSelectedPlan(paymentCount,interval);
    }

    render(){
        let Plans;
        /* 
        check if its page onload
        if its page on load, show weekly contents
        */
       if(this.state.plans.length === 0){
           Plans =  this.props.weeklyPlans;
       }else{
        //handle tab on click   
            Plans = this.state.plans;
       }

       Plans = Plans.map( plan => {
        //console.log(plan.id);
        return(
            <Plan
                key = {plan.id}
                id = {plan.id} 
                selectState = {plan.selectStateClass}
                paymentCount = {plan.paymentCount}
                interval = {plan.interval}
                planOnClick = {this.handlePlanOnclick}
            />
        )
        });
        
        return(
            <div className="plan-card">
               <h1> Customise your plan </h1>
               <ul className={this.state.tabState}>
                   <li className="tab" onClick={this.showWeeklyPlans}>Weekly</li>
                   <li className="tab" onClick={this.showFornightlyPlans}>Fornightly</li>
                   <li className="tab" onClick={this.showMonthlyPlans}>Monthly</li>
               </ul>
               <div className="plan-card__plan-wrapper">
                    {Plans}
               </div>
               <button onClick={this.props.submitPlan} className="button button--submit">Submit Plan</button>
            </div>
        );
    }
}

export default PlanCard;