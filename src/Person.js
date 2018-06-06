import React, { Component } from 'react'
import Vehicle from './Vehicle'


class Person extends Component {
    render(){
        return(
            <span>
            <h2>{this.props.person.firstName} {this.props.person.lastName}</h2>
            <p>{this.props.person.address.street}</p>
            <p>{this.props.person.address.city}, {this.props.person.address.state}</p>
            <Vehicle vehicles={this.props.vehicles}/>
            </span>
        )
    }
}

export default Person