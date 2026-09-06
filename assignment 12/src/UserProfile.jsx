import React, { useState } from "react";

function UserProfile({ user }) {

    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState(user.name);
    const [bio, setBio] = useState(user.bio);

    function saveProfile() {
        setIsEditing(false);
    }

    return (
        <div>
            <h1>User Profile</h1>

            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <br /><br />

                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />

                    <br /><br />

                    <button onClick={saveProfile}>
                        Save
                    </button>
                </div>
            ) : (
                <div>
                    <h2>{name}</h2>

                    <p>{bio}</p>

                    <button onClick={() => setIsEditing(true)}>
                        Edit Profile
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserProfile;