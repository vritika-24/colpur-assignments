import React, { Component } from "react";

class UnmountComponent extends Component {

    componentWillUnmount() {
        alert("Bye");
    }

    render() {
        return (
            <div>
                <h2>Hello! I am a component.</h2>
                <p>Click the button to unmount me.</p>
            </div>
        );
    }
}

export default UnmountComponent;