import React, { Component } from "react";
class EventHandlerBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello Zinier"
        }
        this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage() {
        this.setState({
            message: "Bye Zinier"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Click </button>
            </div>
        )
    }




}
export default EventHandlerBind