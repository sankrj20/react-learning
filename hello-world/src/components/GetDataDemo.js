import React, { Component } from "react";
import axios from "axios";

class GetDataDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            getData: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {                
                this.setState({ getData: response.data })
            }
            )
            .catch(error => {
                console.log(error)
            }
            )
    }
    
    render() {
        const {getData} = this.state;
        console.log("check");
        console.log(getData);
        return (
            <div>
                <h1>THIS IS THE DATA</h1>
                {
                    getData.map(post => {
                        <div key={post.id}>
                            <span>{post.title}</span>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default GetDataDemo;