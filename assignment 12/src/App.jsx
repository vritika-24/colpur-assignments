import React from "react";
import UserProfile from "./UserProfile";

function App() {

    const user = {
        name: "Vritika Khandelwal",
        bio: "I am a BCA student interested in web development and programming."
    };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>

            <UserProfile user={user} />

            <div style={{ height: "1000px", padding: "20px" }}>
                <h2>My Website</h2>

                <p>
                    Scroll down to see the Scroll to Top button.
                </p>

                <p>
                    This is some extra content on the page.
                </p>
            </div>

            <button onClick={scrollToTop}>
                Scroll to Top
            </button>

        </div>
    );
}

export default App;