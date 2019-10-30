import React from 'react';

class Plan extends React.Component{

    handleClick = () =>{
       //console.log(this.props.id)
       //console.log(this.props) 
        this.props.planOnClick(this.props.id, this.props.paymentCount, this.props.interval)
    }

    render(){
        const instalmentPrice = ( 123.45 / parseInt(this.props.paymentCount) ).toFixed(2)
        return(
            <div 
            className= {this.props.selectState}
            onClick = {this.handleClick}
            >
                <p>{this.props.paymentCount} x ${instalmentPrice}</p>
                <p>{this.props.interval}</p>
            </div> 
        );
    }
}
export default Plan;