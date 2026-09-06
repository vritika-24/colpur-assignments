import React, { Component } from "react";

class LoadingComponent extends Component {
    constructor() {
        super();

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 3000);
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>;
        }

        return (
            <div>
                <h1>Welcome!</h1>
                <p>Component has loaded successfully.</p>
            </div>
        );
    }
}

export default LoadingComponent;