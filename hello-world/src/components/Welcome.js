import React from "react";
import { Component } from "react";
class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} via class component </h1>
                {this.props.children}
            </div>
        )
    }
}
export default Welcome;