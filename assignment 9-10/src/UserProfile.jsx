import React, { Component } from "react";

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>User Profile</h1>

                <p>Username: {this.props.username}</p>

                <p>Email: {this.props.email}</p>

                {this.props.isAdmin ? (
                    <p>Role: Administrator</p>
                ) : (
                    <p>Role: User</p>
                )}
            </div>
        );
    }
}

export default UserProfile;