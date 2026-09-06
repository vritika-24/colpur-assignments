import React, { Component } from "react";
import LoadingComponent from "./LoadingComponent";
import UnmountComponent from "./UnmountComponent";

class App extends Component {

    constructor() {
        super();

        this.state = {
            showComponent: true
        };
    }

    unmountComponent = () => {
        this.setState({
            showComponent: false
        });
    };

    render() {
        return (
            <div>
                <LoadingComponent />

                <hr />

                {this.state.showComponent && <UnmountComponent />}

                <button onClick={this.unmountComponent}>
                    Unmount
                </button>
            </div>
        );
    }
}

export default App;