import React from 'react';
import './Main.scss';
import Header from './Components/Header';
import PlanCard from './Components/PlanCard';



class App extends React.Component {

    constructor(){
      super();
      this.submittedPlan = {};
      this.state={
        plans:[],
        submittedPlans:[]
      }
    }

  
  //load all plans
  componentDidMount(){
    fetch('/api/avaiable-plans')
        .then(res => res.json())
        .then(plans => this.setState({plans},()=>console.log(plans)));

    fetch('/api/submitted-plans')
        .then(res => res.json())
        .then(submittedPlans => this.setState({submittedPlans},()=>console.log(submittedPlans)));
  } 

  /* 
  export to json file
  */
  handleSubmitPlan = () => {
    //get the submitted
    console.log(this.submittedPlan);
    let submitplans = this.state.submittedPlans.concat(this.submittedPlan)


  fetch('/api/submit-to-plan', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submitplans)
  })
  .then(function(data){
    //console.log('Request succeed',data)
    alert('payment plan submitted. \n \nCheck http://localhost:3001/api/submitted-plans for all submitted plans')
  })
  .catch(function(error){
    console.log('Request failed',error)
  })
  }

   /*
    store the submitted plan while plan on click
    */
  handleSelectedPlan = (paymentCount, interval) => {
    //console.log(paymentCount,interval);
    console.log(this.state.submittedPlans)
    this.submittedPlan.paymentCount = paymentCount;
    this.submittedPlan.interval = interval;
  }

  render(){
    let InValidPath = "#"
    /* sort out plans and pass in as props */
    const weeklyPlans= [];
    const fornightlyPlans = [];
    const monthlyPlans = [];
    const uuidv4 = require('uuid/v4');
    this.state.plans.forEach(function(plan) {
      // console.log(plan.interval)
      plan.id = uuidv4();
      plan.selectStateClass = "plan-card__plan-wrapper--plan";
      switch (plan.interval) {
        case 'weekly':
          weeklyPlans.push(plan)
          break;
        case 'fornightly':
          fornightlyPlans.push(plan)
          break;
        case 'monthly':
          monthlyPlans.push(plan)
          break;
        default:
          console.log('Sorry, cannot find' + plan.interval + '.');
      }
    });

    return(
      <div className="app">
    <div className="app__header">
      <Header />
      <div className="container">
        <a href={InValidPath} className="button button--back">Back</a>
        <PlanCard 
        weeklyPlans={weeklyPlans}
        fornightlyPlans={fornightlyPlans}
        monthlyPlans={monthlyPlans}
        handleSelectedPlan={this.handleSelectedPlan}
        submitPlan = {this.handleSubmitPlan}
        />
      </div>
    </div>
    </div>
    )
  }
}

export default App;
