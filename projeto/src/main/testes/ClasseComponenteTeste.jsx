import React, { Component } from "react"

export default class ClasseComponenteTestes extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            className: "dentro dos 'state'",
            stateProps: this.props
        }
    }
    
    getStateName = () => {
        return this.state.className
    }

    render(){
        return (
            <div className="cct">
                <h1>{this.state.className}</h1>
                <h1>{this.props.className}</h1>
                <h1>{this.state.stateProps.className}</h1>
            </div>
        )
    }
}
